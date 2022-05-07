using System;
using System.Data.Entity;
using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
	public class TeacherSubjectsRepository : ITeacherSubjectsRepository
	{
        public List<SchoolSubject> GetListOfClasses(Guid guid)
        {
            using var dbContext = new project_dbContext();
            return dbContext.SchoolSubjects.Include(x => x.User).Where(x => x.User.Guid == guid).ToList();
        }
    }
}

