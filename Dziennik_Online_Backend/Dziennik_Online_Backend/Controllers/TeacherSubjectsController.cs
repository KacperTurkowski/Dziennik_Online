﻿using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("teacher/subjects")]
public class TeacherSubjectsController
{
    private readonly ITeacherSubjectsService _service;

    public TeacherSubjectsController(ITeacherSubjectsService teacherSubjectsService)
    {
        _service = teacherSubjectsService;
    }

    [HttpPost]
    public IActionResult GetSubjectsForTeacher([FromBody] Guid guid)
    {
        var classes = _service.GetListOfClasses(guid);
        return new OkObjectResult(classes);
    }

}

