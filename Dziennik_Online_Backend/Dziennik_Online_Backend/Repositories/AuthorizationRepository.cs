using Dziennik_Online_Backend.DbModels;

namespace Dziennik_Online_Backend.Repositories
{
    public class AuthorizationRepository : IAuthorizationRepository
    {
        public User? GetUser(string login, string password)
        {
            using var dbContext = new project_dbContext();
            return dbContext.Users.SingleOrDefault(x => x.Login == login && x.Pass == password);
        }
    }
}

