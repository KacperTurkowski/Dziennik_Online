using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services;

public class TeacherStatisticsService : ITeacherStatisticsService
{
    private readonly ITeacherStatisticsRepository _teacherStatisticsRepository;

    public TeacherStatisticsService(ITeacherStatisticsRepository teacherStatisticsRepository)
    {
        _teacherStatisticsRepository = teacherStatisticsRepository;
    }

    public AverageForGradeTypeResult GetAverageForGradeType(GradeTypeWithUserGuid gradeTypeWithUserGuid)
    {
        if (!_teacherStatisticsRepository.CheckPrivilegesForGradeType(gradeTypeWithUserGuid.GradeTypeId,
                gradeTypeWithUserGuid.UserGuid))
            throw new UnauthorizedAccessException();

        var data =  _teacherStatisticsRepository.GetGradesForGradeTypeId(gradeTypeWithUserGuid.GradeTypeId);
        return new AverageForGradeTypeResult
        {
            Average = data.Average(x => x.Value),
            Median = GetMedian(data.Select(x=>x.Value).ToList())
        };
    }

    public Dictionary<int, GroupOfGrade> GetDataForColumnChart(GradeTypeWithUserGuid gradeTypeWithUserGuid)
    {
        if (!_teacherStatisticsRepository.CheckPrivilegesForGradeType(gradeTypeWithUserGuid.GradeTypeId,
                gradeTypeWithUserGuid.UserGuid))
            throw new UnauthorizedAccessException();

        var data = _teacherStatisticsRepository.GetGradesAndUsersForGradeTypeId(gradeTypeWithUserGuid.GradeTypeId);

        return data.GroupBy(x => x.Value).ToDictionary(gradesGroup => gradesGroup.Key,
            gradesGroup => new GroupOfGrade
            {
                Students = gradesGroup.Select(x => new StudentBasicInfo
                {
                    Id = x.User.Id,
                    Login = x.User.Login,
                    Name = x.User.Name, 
                    Surname = x.User.Surname
                }).ToList()
            });
    }

    public double GetAverageForStudent(AverageForStudent averageForStudent)
    {
        if (!_teacherStatisticsRepository.CheckPrivilegesSchoolSubject(averageForStudent.SchoolSubjectId,averageForStudent.TeacherGuid))
            throw new UnauthorizedAccessException();

        return _teacherStatisticsRepository.GetGradesForStudentSchool(averageForStudent.StudentLogin,
            averageForStudent.SchoolSubjectId)?.Average(x=>x.Value) ?? 0;
    }

    private double GetMedian(List<int> grades)
    {
        if (grades.Count == 0)
            return 0;

        var index = grades.Count / 2;
        return grades.Count % 2 == 0 
            ? (grades[index] + grades[index - 1]) / 2.0 
            : grades[index];
    }
}