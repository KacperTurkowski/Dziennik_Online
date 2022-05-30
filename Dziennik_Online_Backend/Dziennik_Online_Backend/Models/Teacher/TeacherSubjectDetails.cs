namespace Dziennik_Online_Backend.Models.Teacher
{
    public class TeacherSubjectDetails
    {
        public SubjectInfo Subject { get; set; }
        public List<StudentBasicInfo> Students { get; set; }
        public List<GradeTypeInfo> GradeTypes { get; set; }
        public Dictionary<int, List<GradeBasicInfo>> GradeTypeIdGradeListDictionary { get; set; }

        public TeacherSubjectDetails()
        {
            Students = new List<StudentBasicInfo>();
            GradeTypes = new List<GradeTypeInfo>();
            GradeTypeIdGradeListDictionary = new Dictionary<int, List<GradeBasicInfo>>();
        }
    }
}
