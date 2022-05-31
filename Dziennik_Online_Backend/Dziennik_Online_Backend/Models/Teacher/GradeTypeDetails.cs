using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeTypeDetails
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Weight { get; set; }
        public int SchoolSubjectId { get; set; }
        public List<GradeDetails> GradeDetails { get; set; }

        public GradeTypeDetails()
        {
            GradeDetails = new List<GradeDetails>();
        }

        public GradeTypeDetails(GradeType gradeType)
        {
            Id = gradeType.Id;
            Name = gradeType.Name;
            Weight = gradeType.Weight;
            SchoolSubjectId = gradeType.SchoolSubjectId;
            GradeDetails = gradeType.Grades.Select(p => new GradeDetails(p)).ToList();
        }
    }
}
