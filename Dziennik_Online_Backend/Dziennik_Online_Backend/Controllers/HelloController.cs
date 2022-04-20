using Dziennik_Online_Backend.DbModels;
using Microsoft.AspNetCore.Mvc;

namespace Dziennik_Online_Backend.Controllers;

[ApiController]
[Route("[controller]")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public string Get(string name) => $"Hello {name}";

    [HttpGet("classes")]
    public List<Klasa> GetClasses()
    {
        using var dbContext = new project_dbContext();
        return dbContext.Klasas.ToList();
    }

    [HttpGet("user")]
    public U¿ytkownicy GetUser()
    {
        using var dbContext = new project_dbContext();
        return dbContext.U¿ytkownicies.ToList().First();
    }
}