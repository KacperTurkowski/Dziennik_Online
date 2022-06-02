namespace Dziennik_Online_Backend.Models.Teacher
{
    public class AddSimpleGradeDetailsWithUserGuid
    {
        public string Commentary { get; set; } = null!;
        public int Value { get; set; }
        public Guid UserGuid { get; set; }
        public int StudentId { get; set; }
        public int SubjectId { get; set; }
        public int GradeTypeId { get; set; }
    }
}
