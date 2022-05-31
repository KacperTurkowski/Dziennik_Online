using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Models.Teacher
{
	public class SubjectInfo
	{
		public int Id { get; set; }
		public string SchoolSubjectName { get; set; } = null!;
		public int ClassId { get; set; }

		public SubjectInfo(int id, string schoolSubjectName, int classId)
		{
			Id = id;
			SchoolSubjectName = schoolSubjectName;
			ClassId = classId;
		}

        public SubjectInfo(SchoolSubject subject)
        {
			Id = subject.Id;
			SchoolSubjectName = subject.SchoolSubjectName;
			ClassId = subject.ClassId;
		}
	}
}

