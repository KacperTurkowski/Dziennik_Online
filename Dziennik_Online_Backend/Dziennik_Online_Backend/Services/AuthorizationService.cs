using System;
using Dziennik_Online_Backend.Converters;
using Dziennik_Online_Backend.Models;
using Dziennik_Online_Backend.Repositories;

namespace Dziennik_Online_Backend.Services
{
    public class AuthorizationService : IAuthorizationService
    {
        private readonly IAuthorizationRepository _repository;

        public AuthorizationService(IAuthorizationRepository repository)
        {
            _repository = repository;
        }

        public AuthorizationInfo? GetAuthorizationInfo(UserInfo userInfo)
        {
            var user = _repository.GetUser(userInfo.Login, userInfo.Password);
            if (user == null) 
                return null;
            return new AuthorizationInfo(user.Name, user.Surname, RoleConverter.ConvertFromDbStringToRole(user.Permissions), (Guid) user.Guid);

        }
    }
}

