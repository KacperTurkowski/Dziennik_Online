using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Student;
using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dziennik_Online_Backend.Controllers
{
    [ApiController]
    [Route("student/statistics")]
    public class StudentStatisticsController
    {
        private readonly IStudentStatisticsService _studentStatisticsService;

        public StudentStatisticsController(IStudentStatisticsService studentStatisticsService)
        {
            _studentStatisticsService = studentStatisticsService;
        }

        [HttpPost("averageForGrade")]
        public IActionResult GetAverageForGradeType([FromBody] GradeTypeWithUserGuid gradeTypeWithUserGuid)
        {
            try
            {
                return new OkObjectResult(_studentStatisticsService.GetAverageForGradeType(gradeTypeWithUserGuid));
            }
            catch (UnauthorizedAccessException)
            {
                return new StatusCodeResult(401);
            }
        }
        [HttpPost("columnChartData")]
        public IActionResult GetDataForColumnChart([FromBody] GradeTypeWithUserGuid gradeTypeWithUserGuid)
        {
            try
            {
                return new OkObjectResult(_studentStatisticsService.GetDataForColumnChart(gradeTypeWithUserGuid));
            }
            catch (UnauthorizedAccessException)
            {
                return new StatusCodeResult(401);
            }
        }

        [HttpPost("averageForStudent")]
        public IActionResult GetAverageForStudent([FromBody] StudentAverage averageForStudent)
        {
            try
            {
                return new OkObjectResult(new AverageModel
                {
                    Average = _studentStatisticsService.GetAverageForStudent(averageForStudent)
                });
            }
            catch (UnauthorizedAccessException)
            {
                return new StatusCodeResult(401);
            }
        }

    }
}
