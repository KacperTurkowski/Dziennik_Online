using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories;

public interface ITeacherStatisticsRepository
{
    bool CheckPrivilegesForGradeType(int gradeTypeId, Guid teacherGuid);
    List<Grade> GetGradesForGradeTypeId(int gradeTypeId);
    List<Grade> GetGradesAndUsersForGradeTypeId(int gradeTypeId);
    List<Grade> GetGradesForStudentSchool(string login, int subjectId);
    public bool CheckPrivilegesSchoolSubject(int schoolSubjectId, Guid teacherGuid);
}