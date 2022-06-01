namespace Dziennik_Online_Backend.Models.Teacher
{
    public class TeacherSubjectDetails
    {
        public SubjectInfo Subject { get; set; } = null!;
        public List<StudentBasicInfo> Students { get; set; }
        public List<GradeIdTypeInfo> GradeTypes { get; set; }
        public List<GradeTypeBasicInfo> GradeTypeWithGrades { get; set; }

        public TeacherSubjectDetails()
        {
            Students = new List<StudentBasicInfo>();
            GradeTypes = new List<GradeIdTypeInfo>();
            GradeTypeWithGrades = new List<GradeTypeBasicInfo>();
        }
    }
}
