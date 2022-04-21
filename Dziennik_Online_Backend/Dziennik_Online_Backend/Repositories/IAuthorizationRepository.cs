using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
    public interface IAuthorizationRepository
    {
        User? GetUser(string login, string password);
    }
}