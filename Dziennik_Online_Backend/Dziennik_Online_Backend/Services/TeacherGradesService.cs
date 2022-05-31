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

        public TeacherSubjectDetails GetTeacherSubject(int subjectId)
        {
            var schoolSubject = _repository.GetSchoolSubject(subjectId);
            if(schoolSubject == null) throw new ArgumentException();
            var students = _repository.GetStudents(schoolSubject.ClassId);

            return new TeacherSubjectDetails()
            {
                Students = students.Select(p => new StudentBasicInfo(p)).ToList(),
                Subject = new SubjectInfo(schoolSubject),
                GradeTypes = schoolSubject.GradeTypes.Select(p => new GradeIdTypeInfo(p)).ToList(),
                GradeTypeIdGradeListDictionary = schoolSubject.GradeTypes.ToDictionary(k => k.Id, v => v.Grades.Select(p => new GradeBasicInfo(p)).ToList())
            };
        }

        public TeacherGradeDetails GetGrade(int gradeId)
        {
            var grade = _repository.GetGrade(gradeId);
            return new TeacherGradeDetails()
            {
                Commentary = grade.Commentary,
                Value = grade.Value,
                Student = new StudentBasicInfo(grade.User),
                GradeTypeId = grade.GradeTypeId,
                Id = grade.Id,
            };
        }

        public TeacherGradeTypeDetails GetGradeType(int grateTypeId)
        {
            var gradeType = _repository.GetGradeType(grateTypeId);
            if (gradeType?.SchoolSubject == null) throw new ArgumentException();
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


        public void AddGradeType(int schoolSubjectId, SimpleGradeTypeDetails gradeType)
        {
            _repository.UpdateGradeType(new DbModels.GradeType
            {
                Id = default,
                Name = gradeType.Name,
                Weight = gradeType.Weight,
                SchoolSubjectId = schoolSubjectId,
                Grades = gradeType.GradeDetails.Select(grade =>
                    new DbModels.Grade
                    {
                        Id = default,
                        GradeTypeId = default,
                        Commentary = grade.Commentary,
                        UserId = grade.UserId,
                        Value = grade.Value,
                        TimeStamp = DateTime.Now
                    }).ToList()
            });
        }

        public void UpdateGradeType(int schoolSubjectId, int grateTypeId, GradeTypeDetails gradeType)
        {
            _repository.UpdateGradeType(new DbModels.GradeType
            {
                Id = grateTypeId,
                Name = gradeType.Name,
                Weight = gradeType.Weight,
                SchoolSubjectId = schoolSubjectId,
                Grades = gradeType.GradeDetails.Select(grade =>
                    new DbModels.Grade
                    {
                        Id = grade.Id,
                        GradeTypeId = grateTypeId,
                        Commentary = grade.Commentary,
                        UserId = grade.UserId,
                        Value = grade.Value,
                        TimeStamp = DateTime.Now
                    }).ToList()
            });
        }

        public void AddGrade(int gradeTypeId, SimpleGradeDetails grade)
        {
            _repository.UpdateGrade(new DbModels.Grade
            {
                Id = default,
                GradeTypeId = gradeTypeId,
                Commentary = grade.Commentary,
                UserId = grade.UserId,
                Value = grade.Value,
                TimeStamp = DateTime.Now
            });
        }

        public void UpdateGrade(int gradeTypeId, int gradeId, SimpleGradeDetails grade)
        {
            _repository.UpdateGrade(new DbModels.Grade
            {
                Id = gradeId,
                GradeTypeId = gradeTypeId,
                Commentary = grade.Commentary,
                UserId = grade.UserId,
                Value = grade.Value,
                TimeStamp = DateTime.Now
            });
        }

        public void RemoveGradeType(int gradeTypeId)
        {
            _repository.RemoveGradeType(gradeTypeId);
        }
        
        public void RemoveGrade(int gradeId)
        {
            _repository.RemoveGrade(gradeId);
        }
    }
}
