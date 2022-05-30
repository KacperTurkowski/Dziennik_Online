using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeTypeInfo
    {
        public int GradeTypeId { get; set; }
        public string Name { get; set; } = null!;

        public GradeTypeInfo(GradeType type)
        {
            GradeTypeId = type.Id;
            Name = type.Name;
        }
    }
}
