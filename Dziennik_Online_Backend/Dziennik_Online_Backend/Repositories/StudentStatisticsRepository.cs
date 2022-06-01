using Dziennik_Online_Backend.DbModels;
using Microsoft.EntityFrameworkCore;

namespace Dziennik_Online_Backend.Repositories
{
    public class StudentStatisticsRepository : IStudentStatisticsRepository
    {
        public bool CheckPrivilegesForGradeType(int gradeTypeId, Guid studentGuid)
        {
            using (var dbContext = new project_dbContext())
            {
                var studentClass = dbContext.Users.SingleOrDefault(x => x.Guid == studentGuid)?.ClassId;
                var gradeClass = dbContext.GradeTypes.Include(x=>x.SchoolSubject).SingleOrDefault(x => x.Id == gradeTypeId)?.SchoolSubject.ClassId;

                return gradeClass == studentClass && gradeClass!=null;
            }
        }
        public List<Grade> GetGradesForGradeTypeId(int gradeTypeId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.Grades.Where(x => x.GradeTypeId == gradeTypeId).ToList();
        }

        public List<Grade> GetGradesForStudent(Guid userGuid, int schoolSubjectId)
        {
            using (var dbContext = new project_dbContext())
            {
                var user = dbContext.Users.Include(x => x.SchoolSubjects).SingleOrDefault(x => x.Guid == userGuid);
                var subject = dbContext.SchoolSubjects.SingleOrDefault(x=>x.Id == schoolSubjectId);
                if (user == null || subject == null)
                    throw new UnauthorizedAccessException();

                return dbContext.Grades.Include(x=>x.GradeType).Where(x => x.UserId == user.Id && x.GradeType.SchoolSubjectId == subject.Id)
                    .ToList();
            }
        }
    }
}
