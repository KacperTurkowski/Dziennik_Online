using Dziennik_Online_Backend.DbModels;
using Microsoft.EntityFrameworkCore;

namespace Dziennik_Online_Backend.Repositories
{
    public interface IStudentStatisticsRepository
    {
        bool CheckPrivilegesForGradeType(int gradeTypeId, Guid studentGuid);
        List<Grade> GetGradesForGradeTypeId(int gradeTypeId);

        bool CheckPrivilegesSchoolSubject(int schoolSubjectId, object userGuid);
        List<Grade> GetGradesForStudentSchool(Guid userGuid, int schoolSubjectId);
    }

    public class StudentStatisticsRepository : IStudentStatisticsRepository
    {
        public bool CheckPrivilegesForGradeType(int gradeTypeId, Guid studentGuid)
        {
            using (var dbContext = new project_dbContext())
            {
                var studentClass = dbContext.Users.SingleOrDefault(x => x.Guid == studentGuid)?.ClassId;
                var gradeClass = dbContext.GradeTypes.Include(x=>x.SchoolSubject).SingleOrDefault(x => x.Id == gradeTypeId)?.SchoolSubject.ClassId;

                return gradeClass == studentClass;
            }
        }
        public List<Grade> GetGradesForGradeTypeId(int gradeTypeId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.Grades.Where(x => x.GradeTypeId == gradeTypeId).ToList();
        }

        public bool CheckPrivilegesSchoolSubject(int schoolSubjectId, object userGuid)
        {
            throw new NotImplementedException();
        }

        public List<Grade> GetGradesForStudentSchool(Guid userGuid, int schoolSubjectId)
        {
            using (var dbContext = new project_dbContext())
            {
                return dbContext.Users.Include(x => x.Grades).SingleOrDefault(x => x.Guid == userGuid)?.Grades.ToList() ?? new List<Grade>();
            }
        }
    }
}
