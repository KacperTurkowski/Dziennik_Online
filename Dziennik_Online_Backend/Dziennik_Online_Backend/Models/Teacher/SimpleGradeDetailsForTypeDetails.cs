namespace Dziennik_Online_Backend.Models.Teacher
{
    public class SimpleGradeDetailsForTypeDetails
    {
        public string Commentary { get; set; } = null!;
        public int Value { get; set; }
        public int StudentId { get; set; }
        public int GradeId { get; set; }
    }
}
