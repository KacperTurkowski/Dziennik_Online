namespace Dziennik_Online_Backend.Models.Teacher;

public class AverageForStudent
{
    public Guid TeacherGuid { get; set; }
    public string StudentLogin { get; set; }
    public int SchoolSubjectId { get; set; }
}