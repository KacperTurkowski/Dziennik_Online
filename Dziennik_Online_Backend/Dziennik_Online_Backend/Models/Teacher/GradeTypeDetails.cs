using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeTypeDetails
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Weight { get; set; }
        public List<GradeDetails> GradeDetails { get; set; }
       
    }
}
