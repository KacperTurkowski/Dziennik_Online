namespace Dziennik_Online_Backend.Models.Teacher
{
    public class TeacherSubjectDetails
    {
        public SubjectInfo Subject { get; set; } = null!;
        public List<StudentBasicInfo> Students { get; set; }
        public List<GradeIdTypeInfo> GradeTypes { get; set; }
        public Dictionary<int, List<GradeBasicInfo>> GradeTypeIdGradeListDictionary { get; set; }

        public TeacherSubjectDetails()
        {
            Students = new List<StudentBasicInfo>();
            GradeTypes = new List<GradeIdTypeInfo>();
            GradeTypeIdGradeListDictionary = new Dictionary<int, List<GradeBasicInfo>>();
        }
    }
}
