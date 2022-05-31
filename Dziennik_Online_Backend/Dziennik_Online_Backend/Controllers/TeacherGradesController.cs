using Dziennik_Online_Backend.Models.Teacher;
using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("teacher/subjects")]
public class TeacherGradesController
{
    private readonly ITeacherGradesService _service;

    public TeacherGradesController(ITeacherGradesService teacherGradesService)
    {
        _service = teacherGradesService;
    }

    [HttpGet("{subjectId:int}")]
    public IActionResult GetTeacherSubject(int subjectId)
    {
        try
        {
            return new OkObjectResult(_service.GetTeacherSubject(subjectId));
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpGet("{subjectId:int}/{gradeTypeId:int}")]
    public IActionResult GetTeacherGradeType(int subjectId, int gradeTypeId)
    {
        try
        {
            return new OkObjectResult(_service.GetGradeType(gradeTypeId));
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpGet("{subjectId:int}/{gradeTypeId:int}/{gradeId:int}")]
    public IActionResult GetTeacherGrade(int subjectId, int gradeTypeId, int gradeId)
    {
        try
        {
            return new OkObjectResult(_service.GetGrade(gradeId));
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("{subjectId:int}/{gradeTypeId:int}")]
    public IActionResult AddTeacherGrade(int subjectId, int gradeTypeId, SimpleGradeDetails grade)
    {
        try
        {
            _service.AddGrade(gradeTypeId, grade);
            return new OkObjectResult(true);
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPut("{subjectId:int}/{gradeTypeId:int}/{gradeId:int}")]
    public IActionResult UpdateTeacherGrade(int subjectId, int gradeTypeId, int gradeId, [FromBody] SimpleGradeDetails grade)
    {
        try
        {
            _service.UpdateGrade(gradeTypeId, gradeId, grade);
            return new OkObjectResult(true);
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPost("{subjectId:int}")]
    public IActionResult AddTeacherGradeType(int subjectId, [FromBody] SimpleGradeTypeDetails gradeType)
    {

        try
        {
            _service.AddGradeType(subjectId, gradeType);
            return new OkObjectResult(true);
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpPut("{subjectId:int}/{gradeTypeId:int}")]
    public IActionResult UpdateTeacherGradeType(int subjectId, int gradeTypeId, [FromBody] GradeTypeDetails gradeType)
    {
        try
        {
            _service.UpdateGradeType(subjectId, gradeTypeId, gradeType);
            return new OkObjectResult(true);
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpDelete("{subjectId:int}/{gradeTypeId:int}")]
    public IActionResult RemoveGradeType(int subjectId, int gradeTypeId)
    {
        try
        {
            _service.RemoveGradeType(gradeTypeId);
            return new OkObjectResult(true);
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }

    [HttpDelete("{subjectId:int}/{gradeTypeId:int}/{gradeId:int}")]
    public IActionResult RemoveGrade(int subjectId, int gradeTypeId, int gradeId)
    {
        try
        {
            _service.RemoveGrade(gradeId);
            return new OkObjectResult(true);
        }
        catch (ArgumentException)
        {
            return new StatusCodeResult(401);
        }
    }
}
