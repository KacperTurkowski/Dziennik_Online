using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories;

public interface IStudentSubjectsRepository
{
    List<SchoolSubject> GetListOfClasses(Guid guid);
}