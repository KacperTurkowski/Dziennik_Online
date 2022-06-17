namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeTypeBasicInfo
    {
        public int GradeTypeId { get; set; }
        public double Weight { get; set; }
        public List<GradeBasicInfo> Grades { get; set; }
        
        public GradeTypeBasicInfo()
        {
            Grades = new List<GradeBasicInfo>();
        }
    }
}
