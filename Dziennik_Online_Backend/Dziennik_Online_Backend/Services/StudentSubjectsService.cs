using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services
{
    public class StudentSubjectsService : IStudentSubjectsService
    {
        private readonly IStudentSubjectsRepository _studentSubjectsRepository;

        public StudentSubjectsService(IStudentSubjectsRepository studentSubjectsRepository)
        {
            _studentSubjectsRepository = studentSubjectsRepository;
        }
        public List<SubjectInfo> GetListOfClasses(Guid guid)
        {
            return _studentSubjectsRepository.GetListOfClasses(guid).Select(x =>
                    new SubjectInfo(x.Id, x.SchoolSubjectName, x.ClassId, ClassNameProvider.GetClassName(x.ClassId)))
                .ToList();
        }
    }
}
