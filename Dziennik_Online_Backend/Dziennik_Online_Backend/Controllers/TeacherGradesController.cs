using Dziennik_Online_Backend.Models.Student;
using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("teacher/grades")]
public class TeacherGradesController
{
    private readonly ITeacherGradesService _service;

    public TeacherGradesController(ITeacherGradesService teacherGradesService)
    {
        _service = teacherGradesService;
    }

    [HttpPost("GetSubject")]
    public IActionResult GetTeacherSubject([FromBody] SubjectIdWithUserGuid subjectIdWithUserGuid)
    {
        try
        {
            return new OkObjectResult(_service.GetTeacherSubject(subjectIdWithUserGuid));
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("GetGradeType")]
    public IActionResult GetTeacherGradeType([FromBody] GradeTypeIdWithUserGuid grapeTypeIdWithUserGuid)
    {
        try
        {
            return new OkObjectResult(_service.GetGradeType(grapeTypeIdWithUserGuid));
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("GetGrade")]
    public IActionResult GetTeacherGrade([FromBody] GradeIdWithUserGuid gradeIdWithUserGuid)
    {
        try
        {
            return new OkObjectResult(_service.GetGrade(gradeIdWithUserGuid));
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("AddGrade")]
    public IActionResult AddTeacherGrade([FromBody] AddSimpleGradeDetailsWithUserGuid simpleGradeDetails)
    {
        try
        {
            _service.AddGrade(simpleGradeDetails);
            return new OkObjectResult(true);
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("UpdateGrade")]
    public IActionResult UpdateTeacherGrade([FromBody] SimpleGradeDetailsWithUserGuid simpleGradeDetails)
    {
        try
        {
            _service.UpdateGrade(simpleGradeDetails);
            return new OkObjectResult(true);
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("AddGradeType")]
    public IActionResult AddTeacherGradeType([FromBody] AddSimpleGradeTypeDetailsWithUserGuid simpleGradeTypeDetails)
    {

        try
        {
            _service.AddGradeType(simpleGradeTypeDetails);
            return new OkObjectResult(true);
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("UpdateGradeType")]
    public IActionResult UpdateTeacherGradeType([FromBody] SimpleGradeTypeDetailsWithUserGuid simpleGradeTypeDetails)
    {
        try
        {
            _service.UpdateGradeType(simpleGradeTypeDetails);
            return new OkObjectResult(true);
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpDelete("DeleteGradeType")]
    public IActionResult RemoveGradeType([FromBody] GradeTypeIdWithUserGuid grapeTypeIdWithUserGuid)
    {
        try
        {
            _service.RemoveGradeType(grapeTypeIdWithUserGuid);
            return new OkObjectResult(true);
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpDelete("DeleteGrade")]
    public IActionResult RemoveGrade([FromBody] GradeIdWithUserGuid gradeIdWithUserGuid)
    {
        try
        {
            _service.RemoveGrade(gradeIdWithUserGuid);
            return new OkObjectResult(true);
        }
        catch (UnauthorizedAccessException)
        {
            return new StatusCodeResult(401);
        }
    }
}
