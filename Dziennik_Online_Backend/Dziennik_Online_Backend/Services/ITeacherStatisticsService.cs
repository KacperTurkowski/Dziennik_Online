using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Teacher;

namespace Dziennik_Online_Backend.Services;

public interface ITeacherStatisticsService
{
    AverageForGradeTypeResult GetAverageForGradeType(GradeTypeWithUserGuid gradeTypeWithUserGuid);
    List<GroupOfGrade> GetDataForColumnChart(GradeTypeWithUserGuid gradeTypeWithUserGuid);
    double GetAverageForStudent(AverageForStudent averageForStudent);

}