using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class SimpleGradeDetailsWithUserGuid
    {
        public string Commentary { get; set; } = null!;
        public int Value { get; set; }
        public int StudentId { get; set; }
        public int SubjectId { get; set; }
        public int GradeTypeId { get; set; }
        public int GradeId { get; set; }
        public Guid UserGuid { get; set; }
    }
}
