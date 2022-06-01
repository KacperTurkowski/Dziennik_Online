using Dziennik_Online_Backend.DbModels;
using Microsoft.EntityFrameworkCore;

namespace Dziennik_Online_Backend.Repositories
{
    public class StudentGradesRepository : IStudentGradesRepository
    {
        public List<GradeType> GetGradeTypesForSubject(Guid guid, int subjectId)
        {
            using (var dbContext = new project_dbContext())
            {
                var user = dbContext.Users.Include(x => x.SchoolSubjects).ThenInclude(x => x.GradeTypes)
                    .SingleOrDefault(x => x.Guid == guid);

                return dbContext.SchoolSubjects.Include(x => x.GradeTypes)
                    .SingleOrDefault(x => x.Id == subjectId && x.ClassId == user.ClassId)?.GradeTypes.ToList() ?? new List<GradeType>();
            }
        }

        public List<Grade> GetGrades(Guid guid)
        {
            using (var dbContext = new project_dbContext())
            {
                return dbContext.Users.Include(x => x.Grades)
                    .SingleOrDefault(x => x.Guid == guid)?.Grades.ToList() ?? new List<Grade>();
            }
        }

        public Grade? GetGradeById(Guid guid, int gradeId)
        {
            using (var dbContext = new project_dbContext())
            {
                var user = dbContext.Users.SingleOrDefault(x => x.Guid == guid);
                if (user == null)
                    throw new UnauthorizedAccessException();

                return dbContext.Grades.Include(x => x.GradeType).ThenInclude(x => x.SchoolSubject)
                    .SingleOrDefault(x => x.Id == gradeId && x.GradeType.SchoolSubject.ClassId == user.ClassId);
            }
        }

        public List<Grade> GetLast10Grades(Guid guid)
        {
            using (var dbContext = new project_dbContext())
            {
                return dbContext.Users.Include(x=>x.Grades).SingleOrDefault(x => x.Guid == guid)?.Grades.OrderByDescending(x=>x.TimeStamp).Take(10).ToList() ?? new List<Grade>();
            }
        }
    }
}
