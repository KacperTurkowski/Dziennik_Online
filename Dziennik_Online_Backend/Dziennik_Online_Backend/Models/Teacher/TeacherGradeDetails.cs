namespace Dziennik_Online_Backend.Models.Teacher
{
    public class TeacherGradeDetails
    {
        public StudentBasicInfo Student { get; set; } = null!;
        public string Commentary { get; set; } = null!;
        public int Value { get; set; }
        public int GradeTypeId { get; set; }
        public int Id { get; set; }

        public TeacherGradeDetails() { }

      
    }
}
