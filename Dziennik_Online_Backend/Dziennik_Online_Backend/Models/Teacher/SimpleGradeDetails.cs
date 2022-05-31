using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class SimpleGradeDetails
    {
        public string Commentary { get; set; } = null!;
        public int Value { get; set; }
        public int UserId { get; set; }

        public SimpleGradeDetails() { }

        public SimpleGradeDetails(Grade grade)
        {
            Commentary = grade.Commentary;
            Value = grade.Value;
            UserId = grade.UserId;
        }
    }
}
