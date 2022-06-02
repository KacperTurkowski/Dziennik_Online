namespace Dziennik_Online_Backend.Models.Teacher
{
    public class AddSimpleGradeTypeDetailsWithUserGuid
    {
        public string Name { get; set; } = null!;
        public int Weight { get; set; }
        public Guid UserGuid { get; set; }
        public int SubjectId { get; set; }
        public List<AddSimpleGradeDetailForTypeDetails> GradeDetails { get; set; }

        public AddSimpleGradeTypeDetailsWithUserGuid()
        {
            GradeDetails = new List<AddSimpleGradeDetailForTypeDetails>();
        }
    }
}
