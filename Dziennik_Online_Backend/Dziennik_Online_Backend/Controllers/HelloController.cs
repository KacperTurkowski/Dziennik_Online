using Microsoft.AspNetCore.Mvc;

namespace Dziennik_Online_Backend.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet(Name = "GetHello")]
    public string Get(string name) => $"Hello {name}";
}