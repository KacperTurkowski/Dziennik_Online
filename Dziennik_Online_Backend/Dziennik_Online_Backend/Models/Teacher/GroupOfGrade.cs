using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher;

public class GroupOfGrade
{
    public int Grade { get; set; }
    public int Count => Students.Count;
    public List<StudentBasicInfo> Students { get; set; }
}