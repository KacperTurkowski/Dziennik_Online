using Dziennik_Online_Backend.DbModels;
using Dziennik_Online_Backend.Models.Student;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services
{
    public class StudentGradesService : IStudentGradesService
    {
        private readonly IStudentGradesRepository _studentGradesRepository;

        public StudentGradesService(IStudentGradesRepository studentGradesRepository)
        {
            _studentGradesRepository = studentGradesRepository;
        }
        public List<GradeInfo> GetGrades(GradeForSubject gradeForSubject)
        {
            var grades = _studentGradesRepository.GetGrades(gradeForSubject.Guid).ToDictionary(x=>x.GradeTypeId,x=>x);
            var gradeTypes = _studentGradesRepository.GetGradeTypesForSubject(gradeForSubject.Guid, gradeForSubject.SubjectId);
            var result = new List<GradeInfo>();
            foreach (var gradeType in gradeTypes)
            {
                result.Add(new GradeInfo
                {
                    GradeTypeName = gradeType.Name,
                    Value = grades.ContainsKey(gradeType.Id) ? grades[gradeType.Id].Value.ToString() ?? "-" : "-",
                    GradeTypeId = gradeType.Id,
                    GradeId = grades[gradeType.Id].Id
                });
            }

            return result;
        }

        public GradeDetailInfo? GetGrade(GradeIdWithGuid gradeIdWithGuid)
        {
            var grade = _studentGradesRepository.GetGradeById(gradeIdWithGuid.Guid, gradeIdWithGuid.GradeId);
            if (grade == null)
                return null;

            var gradeType = _studentGradesRepository.GetGradeTypeById(gradeIdWithGuid.Guid, grade.GradeTypeId);
            if (gradeType == null)
                return null;
            return new GradeDetailInfo
            {
                Commentary = grade.Commentary,
                GradeTypeId = grade.GradeTypeId,
                Id = grade.Id,
                Value = grade.Value,
                Date = grade.TimeStamp,
                Weight = gradeType.Weight
            };
        }
        public List<GradeDetailInfo> GetStudentReport(Guid guid)
        {
            return _studentGradesRepository.GetLast10Grades(guid).Select(grade=>new GradeDetailInfo()
            {
                Commentary = grade.Commentary,
                GradeTypeId = grade.GradeTypeId,
                Id = grade.Id,
                Value = grade.Value,
                Date = grade.TimeStamp,
                Weight = grade.GradeType.Weight
            }).ToList();
        }
    }
}
