using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models
{
    public class ClassNameProvider
    {
        public static string GetClassName(int classId)
        {
            using var dbContext = new project_dbContext();
            var classObject = dbContext.Classes.SingleOrDefault(x => x.Id == classId);

            return string.Concat(classObject?.Year, " ", classObject?.SchoolSubjects);
        }
    }
}
