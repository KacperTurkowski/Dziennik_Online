using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class TeacherGradeTypeDetails
    {
        public List<StudentBasicInfo> Students { get; set; }
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Weight { get; set; }
        public int SchoolSubjectId { get; set; }
        public List<GradeDetails> GradeDetails { get; set; }

        public TeacherGradeTypeDetails()
        {
            GradeDetails = new List<GradeDetails>();
            Students = new List<StudentBasicInfo>();
        }
    }
}
