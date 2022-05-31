using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class SimpleGradeTypeDetails
    {
        public string Name { get; set; } = null!;
        public int Weight { get; set; }
        public List<SimpleGradeDetails> GradeDetails { get; set; }

        public SimpleGradeTypeDetails()
        {
            GradeDetails = new List<SimpleGradeDetails>();
        }

        public SimpleGradeTypeDetails(GradeType gradeType)
        {
            Name = gradeType.Name;
            Weight = gradeType.Weight;
            GradeDetails = gradeType.Grades.Select(p => new SimpleGradeDetails(p)).ToList();
        }
    }
}
