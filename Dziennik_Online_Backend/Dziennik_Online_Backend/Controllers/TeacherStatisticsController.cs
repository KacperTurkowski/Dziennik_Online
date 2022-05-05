using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dziennik_Online_Backend.Controllers;

[ApiController]
[Route("teacher/statistics")]
public class TeacherStatisticsController
{
    private readonly ITeacherStatisticsService _teacherStatisticsService;

    public TeacherStatisticsController(ITeacherStatisticsService teacherStatisticsService)
    {
        _teacherStatisticsService = teacherStatisticsService;
    }
    [HttpPost("averageForGrade")]
    public IActionResult GetAverageForGradeType([FromBody] GradeTypeWithUserGuid gradeTypeWithUserGuid)
    {
        try
        {
            return new OkObjectResult(_teacherStatisticsService.GetAverageForGradeType(gradeTypeWithUserGuid));
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
            return new OkObjectResult(_teacherStatisticsService.GetDataForColumnChart(gradeTypeWithUserGuid));
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("averageForStudent")]
    public IActionResult GetAverageForStudent([FromBody] AverageForStudent averageForStudent)
    {
        try
        {
            return new OkObjectResult(_teacherStatisticsService.GetAverageForStudent(averageForStudent));
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }
}