using Dziennik_Online_Backend.Models.Teacher;

namespace Dziennik_Online_Backend.Services
{
    public interface ITeacherGradesService
    {
        TeacherSubjectDetails GetTeacherSubject(int subjectId);
        GradeDetails GetGrade(int gradeId);
        GradeTypeDetails GetGradeType(int gradeTypeId);
        void AddGradeType(int schoolSubjectId, SimpleGradeTypeDetails gradeType);
        void UpdateGradeType(int schoolSubjectId, int grateTypeId, GradeTypeDetails gradeType);
        void AddGrade(int gradeTypeId, SimpleGradeDetails grade);
        void UpdateGrade(int gradeTypeId, int gradeId, SimpleGradeDetails grade);
        void RemoveGradeType(int gradeTypeId);
        void RemoveGrade(int gradeId);
    }
}