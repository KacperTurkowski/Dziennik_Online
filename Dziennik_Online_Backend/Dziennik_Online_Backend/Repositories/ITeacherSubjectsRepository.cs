using System;
using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
	public interface ITeacherSubjectsRepository
	{
		List<SchoolSubject> GetListOfClasses(Guid guid);
	}
}

