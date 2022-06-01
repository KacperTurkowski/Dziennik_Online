using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dziennik_Online_Backend.Repositories
{

    [ApiController]
    [Route("student/subjects")]
    public class StudentSubjectsController
    {
        private readonly IStudentSubjectsService _service;

        public StudentSubjectsController(IStudentSubjectsService teacherSubjectsService)
        {
            _service = teacherSubjectsService;
        }

        [HttpPost]
        public IActionResult GetSubjectsForStudent([FromBody] Guid guid)
        {
            try
            {
                var classes = _service.GetListOfClasses(guid);
                return new OkObjectResult(classes);
            }
            catch (UnauthorizedAccessException)
            {
                return new StatusCodeResult(401);
            }
        }
    }
}
