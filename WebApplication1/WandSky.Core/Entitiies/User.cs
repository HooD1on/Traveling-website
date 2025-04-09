namespace WandSky.Core.Entities
{
    // User.cs - 更新现有类
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string PasswordSalt { get; set; }

        // 新增字段
        public string Phone { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Bio { get; set; }
        public string ProfileImage { get; set; }

        // 导航属性
        public UserPreferences Preferences { get; set; }
        public List<UserTravelPreference> TravelPreferences { get; set; }

        // 添加新的密码重置字段
        public string PasswordResetToken { get; set; }
        public DateTime? PasswordResetTokenExpires { get; set; }

    }

    // UserPreferences.cs - 新增类
    public class UserPreferences
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public bool Notifications { get; set; } = true;
        public bool Newsletter { get; set; } = false;

        // 导航属性
        public User User { get; set; }
    }

    // UserTravelPreference.cs - 新增类
    public class UserTravelPreference
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Preference { get; set; }

        // 导航属性
        public User User { get; set; }
    }
}
