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

    public AuthorizationController()
    {
        _service = new AuthorizationService(new AuthorizationRepository());
    }

    [HttpPost]
    public AuthorizationInfo GetAuthorizationInfo([FromBody] UserInfo userInfo)
    {
        return _service.GetAuthorizationInfo(userInfo);
    }
}


