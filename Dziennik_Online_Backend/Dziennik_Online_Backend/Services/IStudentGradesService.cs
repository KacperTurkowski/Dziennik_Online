using Dziennik_Online_Backend.Models.Student;

namespace Dziennik_Online_Backend.Services;

public interface IStudentGradesService
{
    List<GradeInfo> GetGrades(GradeForSubject gradeForSubject);
    GradeDetailInfo? GetGrade(GradeIdWithGuid gradeIdWithGuid);
    List<GradeDetailInfo> GetStudentReport(Guid guid);
}