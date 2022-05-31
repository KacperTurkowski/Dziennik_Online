using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeDetails
    {
        public string Commentary { get; set; } = null!;
        public int Value { get; set; }
        public int UserId { get; set; }
        public int GradeTypeId { get; set; }
        public int Id { get; set; }

        public GradeDetails() { }

        public GradeDetails(Grade grade)
        {
            Commentary = grade.Commentary;
            Value = grade.Value;
            UserId = grade.UserId;
            GradeTypeId = grade.GradeTypeId;
            Id = grade.Id;
        }
    }
}
