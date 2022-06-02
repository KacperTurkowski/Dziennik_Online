using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class SimpleGradeTypeDetailsWithUserGuid
    {
        public string Name { get; set; } = null!;
        public int Weight { get; set; }
        public Guid UserGuid { get; set; }
        public int SubjectId { get; set; }
        public int GradeTypeId { get; set; }
        public List<SimpleGradeDetailsForTypeDetails> GradeDetails { get; set; }

        public SimpleGradeTypeDetailsWithUserGuid()
        {
            GradeDetails = new List<SimpleGradeDetailsForTypeDetails>();
        }
    }
}
