namespace Dziennik_Online_Backend.Models
{
	public class AuthorizationInfo
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public Role Role { get; set; }
		public Guid Guid { get; set; }

		public AuthorizationInfo(string firstName, string lastName, Role role, Guid guid)
		{
			FirstName = firstName;
			LastName = lastName;
			Role = role;
            Guid = guid;
        }
	}
}

