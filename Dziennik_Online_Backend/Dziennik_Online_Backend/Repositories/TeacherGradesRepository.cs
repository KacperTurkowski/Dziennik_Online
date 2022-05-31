using Microsoft.EntityFrameworkCore;
using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
    public class TeacherGradesRepository : ITeacherGradesRepository
    {
        public SchoolSubject GetSchoolSubject(int subjectId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.SchoolSubjects
                .AsNoTracking()
                .Include(x => x.GradeTypes)
                    .ThenInclude(x => x.Grades)
                .SingleOrDefault(x => x.Id == subjectId);
        }

        public List<User> GetStudents(int classId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.Users
                .AsNoTracking()
                .Where(x => x.ClassId == classId)
                .ToList();
        }

        public void UpdateGradeType(GradeType gradeType)
        {
            using var dbContext = new project_dbContext();
            dbContext.GradeTypes.Update(gradeType);
            dbContext.SaveChanges();
        }

        public GradeType GetGradeType(int gradeTypeId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.GradeTypes
                .Include(p => p.Grades)
                .Include(p => p.SchoolSubject)
                .SingleOrDefault(p => p.Id == gradeTypeId);
        }


        public void UpdateGrade(Grade grade)
        {
            using var dbContext = new project_dbContext();
            dbContext.Grades.Update(grade);
            dbContext.SaveChanges();
        }

        public Grade GetGrade(int gradeId)
        {
            using var dbContext = new project_dbContext();
            return dbContext.Grades
                .Include(p => p.User)
                .SingleOrDefault(p => p.Id == gradeId);
        }

        public void RemoveGradeType(int gradeTypeId)
        {
            using var dbContext = new project_dbContext();

            var gradeType = dbContext.GradeTypes
                .Include(p => p.Grades)
                .SingleOrDefault(p => p.Id == gradeTypeId);
            if (gradeType != null)
            {
                dbContext.Grades.RemoveRange(gradeType.Grades);
                dbContext.GradeTypes.Remove(gradeType);
                dbContext.SaveChanges();
            }
        }

        public void RemoveGrade(int gradeId)
        {
            using var dbContext = new project_dbContext();

            var grade = dbContext.Grades
                .SingleOrDefault(p => p.Id == gradeId);
            if (grade != null)
            {
                dbContext.Grades.Remove(grade);
                dbContext.SaveChanges();
            }
        }
    }
}
