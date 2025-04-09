using Microsoft.AspNetCore.Mvc;
using WandSky.Core.DTOs;
using WandSky.Core.DTOs.Auth;
using WandSky.Core.Interfaces.Services;

namespace WandSky.API.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthResponseDto>> Register(UserRegisterDto registerDto)
    {
        var response = await _authService.RegisterAsync(registerDto);

        if (!response.Success)
        {
            return BadRequest(response);
        }

        return Ok(response);
    }

    [HttpPost("login")]
    public async Task<ActionResult<AuthResponseDto>> Login(UserLoginDto loginDto)
    {
        var response = await _authService.LoginAsync(loginDto);

        if (!response.Success)
        {
            return BadRequest(response);
        }

        return Ok(response);
    }
}