using Dziennik_Online_Backend.DbModels;
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
            Median = AverageHelper.GetMedian(data.Select(x=>x.Value).ToList())
        };
    }

    public List<GroupOfGrade> GetDataForColumnChart(GradeTypeWithUserGuid gradeTypeWithUserGuid)
    {
        if (!_teacherStatisticsRepository.CheckPrivilegesForGradeType(gradeTypeWithUserGuid.GradeTypeId,
                gradeTypeWithUserGuid.UserGuid))
            throw new UnauthorizedAccessException();

        var data = _teacherStatisticsRepository.GetGradesAndUsersForGradeTypeId(gradeTypeWithUserGuid.GradeTypeId);

        return data.GroupBy(x => x.Value).Select(gradesGroup => new GroupOfGrade
            {
                Grade = gradesGroup.Key,
                Students = gradesGroup.Select(x => new StudentBasicInfo
                {
                    Id = x.User.Id,
                    Login = x.User.Login,
                    Name = x.User.Name, 
                    Surname = x.User.Surname
                }).ToList()
            }).OrderBy(x=>x.Grade).ToList();
    }

    public double GetAverageForStudent(AverageForStudent averageForStudent)
    {
        if (!_teacherStatisticsRepository.CheckPrivilegesSchoolSubject(averageForStudent.SchoolSubjectId,averageForStudent.TeacherGuid))
            throw new UnauthorizedAccessException();

        var grades = _teacherStatisticsRepository.GetGradesForStudentSchool(averageForStudent.StudentLogin,
            averageForStudent.SchoolSubjectId);
        return AverageHelper.GetWeightedAverage(grades);
    }
}