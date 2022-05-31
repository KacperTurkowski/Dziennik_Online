using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeBasicInfo
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public int UserId { get; set; }

        public GradeBasicInfo(Grade grade)
        {
            Id = grade.Id;
            Value = grade.Value;
            UserId = grade.UserId;
        }
    }
}
