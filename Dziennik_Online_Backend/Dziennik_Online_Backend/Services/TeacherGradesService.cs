using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services
{
    public class TeacherGradesService : ITeacherGradesService
    {
        private readonly ITeacherGradesRepository _repository;

        public TeacherGradesService(ITeacherGradesRepository repository)
        {
            _repository = repository;
        }

        public TeacherSubjectDetails GetTeacherSubject(int subjectId, Guid teacherGuid)
        {
            if (!_repository.CheckPrivilegesForSchoolSubject(subjectId, teacherGuid))
                    throw new UnauthorizedAccessException();

            var schoolSubject = _repository.GetSchoolSubject(subjectId);
            var students = _repository.GetStudents(schoolSubject.ClassId);

            return new TeacherSubjectDetails()
            {
                Students = students.Select(p => new StudentBasicInfo(p)).ToList(),
                Subject = new SubjectInfo(schoolSubject),
                GradeTypes = schoolSubject.GradeTypes.Select(p => new GradeTypeInfo(p)).ToList(),
                GradeTypeIdGradeListDictionary = schoolSubject.GradeTypes.ToDictionary(k => k.Id, v => v.Grades.Select(p => new GradeBasicInfo(p)).ToList())
            };
        }
    }
}
