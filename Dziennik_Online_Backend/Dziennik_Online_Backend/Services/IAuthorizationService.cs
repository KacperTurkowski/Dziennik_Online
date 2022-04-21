using Dziennik_Online_Backend.Models;

namespace Dziennik_Online_Backend.Services
{
    public interface IAuthorizationService
    {
        AuthorizationInfo? GetAuthorizationInfo(UserInfo userInfo);
    }
}