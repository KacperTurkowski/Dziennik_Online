using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Student;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services
{
    public interface IStudentStatisticsService
    {
        AverageForGradeTypeResult GetAverageForGradeType(GradeTypeWithUserGuid gradeTypeWithUserGuid);
        Dictionary<int,int> GetDataForColumnChart(GradeTypeWithUserGuid gradeTypeWithUserGuid);
        double GetAverageForStudent(StudentAverage averageForStudent);
    }

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
            return new AverageForGradeTypeResult
            {
                Average = data.Average(x => x.Value),
                Median = GetMedian(data.Select(x => x.Value).ToList())
            };
        }

        public Dictionary<int, int> GetDataForColumnChart(GradeTypeWithUserGuid gradeTypeWithUserGuid)
        {
            if (!_studentStatisticsRepository.CheckPrivilegesForGradeType(gradeTypeWithUserGuid.GradeTypeId,
                    gradeTypeWithUserGuid.UserGuid))
                throw new UnauthorizedAccessException();

            var data = _studentStatisticsRepository.GetGradesForGradeTypeId(gradeTypeWithUserGuid.GradeTypeId);

            return data.GroupBy(x => x.Value).ToDictionary(gradesGroup => gradesGroup.Key, gradesGroup => gradesGroup.Count());
        }

        public double GetAverageForStudent(StudentAverage averageForStudent) => _studentStatisticsRepository
            .GetGradesForStudentSchool(averageForStudent.StudentGuid, averageForStudent.SchoolSubjectId)
            .Average(x => x.Value);

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
}
