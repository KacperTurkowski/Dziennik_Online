using System;
using Dziennik_Online_Backend.DbModels;
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

    [HttpPost()]
    public IActionResult GetAuthorizationInfo([FromBody] SubjectIdWithUserGuid subjectIdWithUserGuid)
    {
        var classes = _service.GetTeacherSubject(subjectIdWithUserGuid.SubjectId, subjectIdWithUserGuid.UserGuid);
        return new OkObjectResult(classes);
    }
}
