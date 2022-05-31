using Dziennik_Online_Backend.Models.Teacher;

namespace Dziennik_Online_Backend.Services;

public interface IStudentSubjectsService
{
    List<SubjectInfo> GetListOfClasses(Guid guid);
}