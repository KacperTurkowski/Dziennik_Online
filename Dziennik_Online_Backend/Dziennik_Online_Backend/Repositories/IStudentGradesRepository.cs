using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories;

public interface IStudentGradesRepository
{
    List<GradeType> GetGradeTypesForSubject(Guid guid, int subjectId);
    List<Grade> GetGrades(Guid guid);
    Grade? GetGradeById(Guid guid, int gradeId);
    List<Grade> GetLast10Grades(Guid guid);
}