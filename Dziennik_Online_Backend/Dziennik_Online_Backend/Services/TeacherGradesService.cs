using Dziennik_Online_Backend.Models;
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

        public TeacherSubjectDetails GetTeacherSubject(SubjectIdWithUserGuid subjectIdWithUserGuid)
        {
            if (!_repository.CheckPrivilegesForSubject(subjectIdWithUserGuid.SubjectId, subjectIdWithUserGuid.UserGuid))
                throw new UnauthorizedAccessException();

            var schoolSubject = _repository.GetSchoolSubject(subjectIdWithUserGuid.SubjectId);
            var students = _repository.GetStudents(schoolSubject.ClassId);

            return new TeacherSubjectDetails()
            {
                Students = students.Select(p => new StudentBasicInfo(p)).ToList(),
                Subject = new SubjectInfo(schoolSubject, ClassNameProvider.GetClassName(schoolSubject.ClassId)),
                GradeTypes = schoolSubject.GradeTypes.Select(p => new GradeIdTypeInfo(p)).ToList(),
                GradeTypeWithGrades = schoolSubject.GradeTypes.Select(p => new GradeTypeBasicInfo
                {
                    GradeTypeId = p.Id,
                    Weight = p.Weight,
                    Grades = p.Grades.Select(g => new GradeBasicInfo(g)).ToList()
                }).ToList()
            };
        }

        public TeacherGradeDetails GetGrade(GradeIdWithUserGuid gradeIdWithUserGuid)
        {
            if (!_repository.CheckPrivilegesForSubject(gradeIdWithUserGuid.SubjectId, gradeIdWithUserGuid.UserGuid))
                throw new UnauthorizedAccessException();

            var grade = _repository.GetGrade(gradeIdWithUserGuid.GradeId);
            return new TeacherGradeDetails()
            {
                Commentary = grade.Commentary,
                Value = grade.Value,
                Student = new StudentBasicInfo(grade.User),
                GradeTypeId = grade.GradeTypeId,
                Id = grade.Id,
            };
        }

        public TeacherGradeTypeDetails GetGradeType(GradeTypeIdWithUserGuid grapeTypeIdWithUserGuid)
        {
            if (!_repository.CheckPrivilegesForSubject(grapeTypeIdWithUserGuid.SubjectId, grapeTypeIdWithUserGuid.UserGuid))
                throw new UnauthorizedAccessException();

            var gradeType = _repository.GetGradeType(grapeTypeIdWithUserGuid.GradeTypeId);
            if (gradeType?.SchoolSubject == null) return null;
            var students = _repository.GetStudents(gradeType.SchoolSubject.ClassId);
            return new TeacherGradeTypeDetails()
            {
                Id = gradeType.Id,
                Name = gradeType.Name,
                Weight = gradeType.Weight,
                SchoolSubjectId = gradeType.SchoolSubjectId,
                GradeDetails = gradeType.Grades.Select(p => new GradeDetails(p)).ToList(),
                Students = students.Select(p => new StudentBasicInfo(p)).ToList(),
            };
        }


        public void AddGradeType(AddSimpleGradeTypeDetailsWithUserGuid gradeType)
        {
            if (!_repository.CheckPrivilegesForSubject(gradeType.SubjectId, gradeType.UserGuid))
                throw new UnauthorizedAccessException();

            _repository.UpdateGradeType(new DbModels.GradeType
            {
                Id = default,
                Name = gradeType.Name,
                Weight = gradeType.Weight,
                SchoolSubjectId = gradeType.SubjectId,
                Grades = gradeType.GradeDetails.Select(grade =>
                    new DbModels.Grade
                    {
                        Id = default,
                        GradeTypeId = default,
                        Commentary = grade.Commentary,
                        UserId = grade.StudentId,
                        Value = grade.Value,
                        TimeStamp = DateTime.Now
                    }).ToList()
            });
        }

        public void UpdateGradeType(SimpleGradeTypeDetailsWithUserGuid gradeType)
        {
            if (!_repository.CheckPrivilegesForSubject(gradeType.SubjectId, gradeType.UserGuid))
                throw new UnauthorizedAccessException();

            _repository.UpdateGradeType(new DbModels.GradeType
            {
                Id = gradeType.GradeTypeId,
                Name = gradeType.Name,
                Weight = gradeType.Weight,
                SchoolSubjectId = gradeType.SubjectId,
                Grades = gradeType.GradeDetails.Select(grade =>
                    new DbModels.Grade
                    {
                        Id = grade.GradeId,
                        GradeTypeId = gradeType.GradeTypeId,
                        Commentary = grade.Commentary,
                        UserId = grade.StudentId,
                        Value = grade.Value,
                        TimeStamp = DateTime.Now
                    }).ToList()
            });
        }

        public void AddGrade(AddSimpleGradeDetailsWithUserGuid grade)
        {
            if (!_repository.CheckPrivilegesForSubject(grade.SubjectId, grade.UserGuid))
                throw new UnauthorizedAccessException();

            _repository.UpdateGrade(new DbModels.Grade
            {
                Id = default,
                GradeTypeId = grade.GradeTypeId,
                Commentary = grade.Commentary,
                UserId = grade.StudentId,
                Value = grade.Value,
                TimeStamp = DateTime.Now
            });
        }

        public void UpdateGrade(SimpleGradeDetailsWithUserGuid grade)
        {
            if (!_repository.CheckPrivilegesForSubject(grade.SubjectId, grade.UserGuid))
                throw new UnauthorizedAccessException();

            _repository.UpdateGrade(new DbModels.Grade
            {
                Id = grade.GradeId,
                GradeTypeId = grade.GradeTypeId,
                Commentary = grade.Commentary,
                UserId = grade.StudentId,
                Value = grade.Value,
                TimeStamp = DateTime.Now
            });
        }

        public void RemoveGradeType(GradeTypeIdWithUserGuid grapeTypeIdWithUserGuid)
        {
            if (!_repository.CheckPrivilegesForSubject(grapeTypeIdWithUserGuid.SubjectId, grapeTypeIdWithUserGuid.UserGuid))
                throw new UnauthorizedAccessException();

            _repository.RemoveGradeType(grapeTypeIdWithUserGuid.GradeTypeId);
        }
        
        public void RemoveGrade(GradeIdWithUserGuid grapeTypeIdWithUserGuid)
        {
            _repository.RemoveGrade(grapeTypeIdWithUserGuid.GradeId);
        }
    }
}
