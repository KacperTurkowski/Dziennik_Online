using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Repositories;
using Dziennik_Online_Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Dziennik_Online_Backend.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthorizationController
{
    private readonly IAuthorizationService _service;

    public AuthorizationController(IAuthorizationService authorizationService)
    {
        _service = authorizationService;
    }

    [HttpPost]
    public IActionResult GetAuthorizationInfo([FromBody] UserInfo userInfo)
    {
        var authorizationInfo = _service.GetAuthorizationInfo(userInfo);
        if(authorizationInfo == null)
            return new StatusCodeResult(401);
        return new OkObjectResult(authorizationInfo);
    }
}


