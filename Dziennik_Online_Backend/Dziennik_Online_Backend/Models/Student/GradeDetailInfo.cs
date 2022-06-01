namespace Dziennik_Online_Backend.Models.Student
{
    public class GradeDetailInfo
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public string Commentary { get; set; } = null!;
        public int GradeTypeId { get; set; }
        public double Weight { get; set; }
        public DateTime Date { get; set; }
    }
}
