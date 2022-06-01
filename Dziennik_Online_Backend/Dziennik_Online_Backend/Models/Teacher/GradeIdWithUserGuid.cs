namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeIdWithUserGuid
    {
        public Guid UserGuid { get; set; }
        public int SubjectId { get; set; }
        public int GradeTypeId { get; set; }
        public int GradeId { get; set; }
    }
}
