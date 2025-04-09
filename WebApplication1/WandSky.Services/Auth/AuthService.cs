using AutoMapper;
using WandSky.Core.DTOs.Auth;
using WandSky.Core.DTOs;
using WandSky.Core.Entities;
using WandSky.Core.Interfaces.Repositories;
using WandSky.Core.Interfaces.Services;
using WandSky.Core.Interfaces.Repositories;

namespace WandSky.Services.Auth
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;


        public async Task<ServiceResponse<bool>> RequestPasswordResetAsync(string email)
        {
            var user = await _userRepository.GetByEmailAsync(email);
            if (user == null)
            {
                return new ServiceResponse<bool> { Success = true }; // 安全考虑，即使用户不存在也返回成功
            }

            // 生成重置令牌
            string resetToken = Convert.ToBase64String(Guid.NewGuid().ToByteArray());
            DateTime tokenExpires = DateTime.UtcNow.AddHours(24);

            await _userRepository.UpdatePasswordResetTokenAsync(user.Id, resetToken, tokenExpires);

            // TODO: 这里可以添加发送邮件的逻辑

            return new ServiceResponse<bool> { Success = true };
        }

        public async Task<ServiceResponse<bool>> ResetPasswordWithTokenAsync(string token, string newPassword)
        {
            var user = await _userRepository.GetByPasswordResetTokenAsync(token);

            if (user == null || user.PasswordResetTokenExpires < DateTime.UtcNow)
            {
                return new ServiceResponse<bool>
                {
                    Success = false,
                    Error = "无效或已过期的重置令牌"
                };
            }
            // 创建新密码哈希
            string passwordSalt = BCrypt.Net.BCrypt.GenerateSalt();
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(newPassword, passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.PasswordResetToken = null;
            user.PasswordResetTokenExpires = null;

            await _userRepository.UpdateAsync(user);

            return new ServiceResponse<bool> { Success = true };
        }

        public AuthService(
            IUserRepository userRepository,
            ITokenService tokenService,
            IMapper mapper)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
            _mapper = mapper;
        }

        public async Task<AuthResponseDto> RegisterAsync(UserRegisterDto registerDto)
        {
            if (await _userRepository.EmailExistsAsync(registerDto.Email))
            {
                return new AuthResponseDto
                {
                    Success = false,
                    Error = "该邮箱已被注册"
                };
            }

            if (registerDto.Password != registerDto.ConfirmPassword)
            {
                return new AuthResponseDto
                {
                    Success = false,
                    Error = "两次输入的密码不匹配"
                };
            }


            // 创建密码哈希
            string passwordSalt = BCrypt.Net.BCrypt.GenerateSalt();
            string passwordHash = BCrypt.Net.BCrypt.HashPassword(registerDto.Password, passwordSalt);

            var user = new User
            {
                Id = Guid.NewGuid(),
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                Email = registerDto.Email.ToLower(),
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt,
                // 添加这些默认值
                Address = "",           // 空字符串而不是null
                City = "",              // 空字符串而不是null
                Country = "",           // 空字符串而不是null
                Phone = "",             // 空字符串而不是null
                Bio = "",               // 空字符串而不是null
                ProfileImage = ""       // 空字符串而不是null
            };

            await _userRepository.AddAsync(user);

            var token = _tokenService.CreateToken(user);

            return new AuthResponseDto
            {
                Success = true,
                Token = token,
                User = _mapper.Map<UserDto>(user)
            };
        }

        public async Task<AuthResponseDto> LoginAsync(UserLoginDto loginDto)
        {
            var user = await _userRepository.GetByEmailAsync(loginDto.Email);

            if (user == null)
            {
                return new AuthResponseDto
                {
                    Success = false,
                    Error = "用户不存在"
                };
            }

            if (!BCrypt.Net.BCrypt.Verify(loginDto.Password, user.PasswordHash))
            {
                return new AuthResponseDto
                {
                    Success = false,
                    Error = "密码错误"
                };
            }

            var token = _tokenService.CreateToken(user);

            return new AuthResponseDto
            {
                Success = true,
                Token = token,
                User = _mapper.Map<UserDto>(user)
            };
        }
    }
}
