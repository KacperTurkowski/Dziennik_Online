using Dziennik_Online_Backend.Models.Teacher;

namespace Dziennik_Online_Backend.Services
{
    public interface ITeacherGradesService
    {
        TeacherSubjectDetails GetTeacherSubject(int subjectId, Guid teacherGuid);
    }
}