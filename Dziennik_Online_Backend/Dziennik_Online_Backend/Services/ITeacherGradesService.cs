using Dziennik_Online_Backend.Models.Teacher;

namespace Dziennik_Online_Backend.Services
{
    public interface ITeacherGradesService
    {
        TeacherSubjectDetails GetTeacherSubject(SubjectIdWithUserGuid subjectIdWithUserGuid);

        TeacherGradeDetails GetGrade(GradeIdWithUserGuid grapeTypeIdWithUserGuid);
        void RemoveGrade(GradeIdWithUserGuid grapeTypeIdWithUserGuid);
        void AddGrade(AddSimpleGradeDetailsWithUserGuid simpleGradeDetails);
        void UpdateGrade(SimpleGradeDetailsWithUserGuid simpleGradeDetails);

        TeacherGradeTypeDetails GetGradeType(GradeTypeIdWithUserGuid gradeIdWithUserGuid);
        void RemoveGradeType(GradeTypeIdWithUserGuid grapeTypeIdWithUserGuid);
        void AddGradeType(AddSimpleGradeTypeDetailsWithUserGuid gradeType);
        void UpdateGradeType(SimpleGradeTypeDetailsWithUserGuid gradeType);
    }
}