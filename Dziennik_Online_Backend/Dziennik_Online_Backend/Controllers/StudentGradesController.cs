using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Student;
using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dziennik_Online_Backend.Controllers
{
    [ApiController]
    [Route("student/grades")]
    public class StudentGradesController
    {
        private readonly IStudentGradesService _service;

        public StudentGradesController(IStudentGradesService studentSubjectsService)
        {
            _service = studentSubjectsService;
        }

        [HttpPost("GetGrades")]
        public IActionResult GetGradesForSubject([FromBody] GradeForSubject gradeForSubject)
        {
            try
            {
                var grades = _service.GetGrades(gradeForSubject);
                return new OkObjectResult(grades);
            }
            catch (UnauthorizedAccessException)
            {
                return new StatusCodeResult(401);
            }
        }

        [HttpPost("GetGrade")]
        public IActionResult GetGrade([FromBody] GradeIdWithGuid gradeIdWithGuid)
        {
            try
            {
                var grade = _service.GetGrade(gradeIdWithGuid);
                if (grade == null)
                    return new StatusCodeResult(404);

                return new OkObjectResult(grade);
            }
            catch (UnauthorizedAccessException)
            {
                return new StatusCodeResult(401);
            }
        }

        [HttpPost("GetStartReport")]
        public IActionResult GetStudentReport([FromBody] GuidModel guid)
        {
            try
            {
                return new OkObjectResult(_service.GetStudentReport(guid.Guid));
            }
            catch (UnauthorizedAccessException)
            {
                return new StatusCodeResult(401);
            }
        }
    }
}
