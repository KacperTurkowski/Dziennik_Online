using System.Data.Entity;
using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
    public class StudentSubjectsRepository : IStudentSubjectsRepository
    {
        public List<SchoolSubject> GetListOfClasses(Guid guid)
        {
            using (var dbContext = new project_dbContext())
            {
                var userClass = dbContext.Users.SingleOrDefault(x => x.Guid == guid)?.ClassId;
                return dbContext.SchoolSubjects.Where(x => x.ClassId == userClass).ToList();
            }
        }
    }
}
