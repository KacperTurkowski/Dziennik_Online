using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeIdTypeInfo
    {
        public int GradeTypeId { get; set; }
        public string Name { get; set; } = null!;

        public GradeIdTypeInfo(GradeType type)
        {
            GradeTypeId = type.Id;
            Name = type.Name;
        }
    }
}
