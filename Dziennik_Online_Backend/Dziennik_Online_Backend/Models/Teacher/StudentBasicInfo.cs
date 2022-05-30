using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class StudentBasicInfo
    {
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public int Id { get; set; }
        public string? Login { get; set; }

        public StudentBasicInfo()
        {

        }

        public StudentBasicInfo(User user)
        {
            Name = user.Name;
            Surname = user.Surname;
            Id = user.Id;
            Login = user.Login;
        }
    }
}
