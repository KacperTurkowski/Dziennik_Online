using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Student;
using Dziennik_Online_Backend.Models.Teacher;

namespace Dziennik_Online_Backend.Services;

public interface IStudentStatisticsService
{
    AverageForGradeTypeResult GetAverageForGradeType(GradeTypeWithUserGuid gradeTypeWithUserGuid);
    List<StudentChartData> GetDataForColumnChart(GradeTypeWithUserGuid gradeTypeWithUserGuid);
    double GetAverageForStudent(StudentAverage averageForStudent);
}