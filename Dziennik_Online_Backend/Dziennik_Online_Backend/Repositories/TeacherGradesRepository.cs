using System.Data.Entity;
using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
    public class TeacherGradesRepository : ITeacherGradesRepository
    {
        public bool CheckPrivilegesForSchoolSubject(int schoolSubjectId, Guid teacherGuid)
        {
            using (var dbContext = new project_dbContext())
            {
                var teacher = dbContext.SchoolSubjects
                    .Include(x => x.User)
                    .SingleOrDefault(x => x.Id == schoolSubjectId)
                    ?.User?.Guid;
                return teacherGuid == teacher;
            }
        }

        public SchoolSubject GetSchoolSubject(int subjectId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.SchoolSubjects
                .Include(x => x.GradeTypes.Select(g => g.Grades))
                .Where(x => x.Id == subjectId)
                .SingleOrDefault();
        }

        public List<User> GetStudents(int classId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.Users
                .Where(x => x.ClassId == classId)
                .ToList();
        }
    }
}
