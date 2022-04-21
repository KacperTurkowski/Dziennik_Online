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
    public List<Class> GetClasses()
    {
        using var dbContext = new project_dbContext();
        return dbContext.Classes.ToList();
    }

    [HttpGet("user")]
    public User GetUser()
    {
        using var dbContext = new project_dbContext();
        return dbContext.Users.ToList().First();
    }
}