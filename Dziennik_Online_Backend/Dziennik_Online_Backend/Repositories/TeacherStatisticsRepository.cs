using Dziennik_Online_Backend.DbModels;
using Microsoft.EntityFrameworkCore;

namespace Dziennik_Online_Backend.Repositories;

public class TeacherStatisticsRepository : ITeacherStatisticsRepository
{
    public bool CheckPrivilegesForGradeType(int gradeTypeId, Guid teacherGuid)
    {
        using (var dbContext = new project_dbContext())
        {
            var gradeType = dbContext.GradeTypes.Include(x=>x.SchoolSubject).Include(x=>x.SchoolSubject.User).SingleOrDefault(x => x.Id == gradeTypeId);
            if (gradeType == null)
                return false;
            
            return gradeType.SchoolSubject.User.Guid == teacherGuid;
        }
    }

    public bool CheckPrivilegesSchoolSubject(int schoolSubjectId, Guid teacherGuid)
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

    public List<Grade> GetGradesForGradeTypeId(int gradeTypeId)
    {
        using var dbContext = new project_dbContext();
        return dbContext.Grades.Where(x => x.GradeTypeId == gradeTypeId).ToList();
    }

    public List<Grade> GetGradesForStudentSchool(string login, int subjectId)
    {
        using var dbContext = new project_dbContext();
        return dbContext.Grades
            .Include(x => x.User)
            .Include(x => x.GradeType)
            .Where(x => x.User.Login == login && x.GradeType.SchoolSubjectId == subjectId)
            .ToList();
    }

    public List<Grade> GetGradesAndUsersForGradeTypeId(int gradeTypeId)
    {
        using var dbContext = new project_dbContext();
        return dbContext.Grades.Include(x=>x.User).Where(x => x.GradeTypeId == gradeTypeId).ToList();
    }
}