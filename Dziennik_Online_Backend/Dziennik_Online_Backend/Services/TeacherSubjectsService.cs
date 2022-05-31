using System;
using Dziennik_Online_Backend.DbModels;
using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services
{
	public class TeacherSubjectsService : ITeacherSubjectsService
	{
        private readonly ITeacherSubjectsRepository _repository;

        public TeacherSubjectsService(ITeacherSubjectsRepository repository)
		{
            _repository = repository;
		}

        public List<SubjectInfo> GetListOfClasses(Guid guid)
        {
            return _repository.GetListOfClasses(guid).Select(x =>
                new SubjectInfo(x.Id, x.SchoolSubjectName, x.ClassId, className: ClassNameProvider.GetClassName(x.ClassId))).ToList();
        }
    }
}

