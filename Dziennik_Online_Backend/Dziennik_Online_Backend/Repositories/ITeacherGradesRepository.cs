using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
    public interface ITeacherGradesRepository
    {
        bool CheckPrivilegesForSchoolSubject(int schoolSubjectId, Guid teacherGuid);
        SchoolSubject GetSchoolSubject(int subjectId);
        List<User> GetStudents(int classId);
    }
}
