using Dziennik_Online_Backend.DbModels;
using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Student;
using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services
{
    public class StudentStatisticsService : IStudentStatisticsService
    {
        private readonly IStudentStatisticsRepository _studentStatisticsRepository;

        public StudentStatisticsService(IStudentStatisticsRepository studentStatisticsRepository)
        {
            _studentStatisticsRepository = studentStatisticsRepository;
        }
        public AverageForGradeTypeResult GetAverageForGradeType(GradeTypeWithUserGuid gradeTypeWithUserGuid)
        {
            if (!_studentStatisticsRepository.CheckPrivilegesForGradeType(gradeTypeWithUserGuid.GradeTypeId,
                    gradeTypeWithUserGuid.UserGuid))
                throw new UnauthorizedAccessException();

            var data = _studentStatisticsRepository.GetGradesForGradeTypeId(gradeTypeWithUserGuid.GradeTypeId);
            if (!data.Any())
                return new AverageForGradeTypeResult
                {
                    Average = 0,
                    Median = 0
                };

            return new AverageForGradeTypeResult
            {
                Average = data.Average(x => x.Value),
                Median = AverageHelper.GetMedian(data.Select(x => x.Value).ToList())
            };
        }

        public List<StudentChartData> GetDataForColumnChart(GradeTypeWithUserGuid gradeTypeWithUserGuid)
        {
            if (!_studentStatisticsRepository.CheckPrivilegesForGradeType(gradeTypeWithUserGuid.GradeTypeId,
                    gradeTypeWithUserGuid.UserGuid))
                throw new UnauthorizedAccessException();

            var data = _studentStatisticsRepository.GetGradesForGradeTypeId(gradeTypeWithUserGuid.GradeTypeId);

            return data.GroupBy(x => x.Value).Select(x=>new StudentChartData
            {
                Count = x.Count(),
                Grade = x.Key
            }).OrderBy(x => x.Grade).ToList();
        }

        public double GetAverageForStudent(StudentAverage averageForStudent)
        {
            var grades = _studentStatisticsRepository
                .GetGradesForStudent(averageForStudent.StudentGuid, averageForStudent.SchoolSubjectId);
            return AverageHelper.GetWeightedAverage(grades);
        }


    }
}
