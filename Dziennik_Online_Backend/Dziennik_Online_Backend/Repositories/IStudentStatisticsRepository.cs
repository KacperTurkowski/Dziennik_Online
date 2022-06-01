using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories;

public interface IStudentStatisticsRepository
{
    bool CheckPrivilegesForGradeType(int gradeTypeId, Guid studentGuid);
    List<Grade> GetGradesForGradeTypeId(int gradeTypeId);
    List<Grade> GetGradesForStudent(Guid userGuid, int schoolSubjectId);
}