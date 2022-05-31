using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
    public interface ITeacherGradesRepository
    {
        SchoolSubject GetSchoolSubject(int subjectId);
        List<User> GetStudents(int classId);
        void UpdateGradeType(GradeType gradeType);
        GradeType GetGradeType(int gradeTypeId);
        void UpdateGrade(Grade grade);
        Grade GetGrade(int gradeId);
        void RemoveGradeType(int gradeTypeId);
        void RemoveGrade(int gradeId);
    }
}
