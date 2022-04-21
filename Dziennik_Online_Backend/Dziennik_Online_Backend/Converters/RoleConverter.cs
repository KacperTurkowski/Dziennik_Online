using System;
using Dziennik_Online_Backend.Models;

namespace Dziennik_Online_Backend.Converters
{
	public class RoleConverter
	{
		public static Role ConvertFromDbStringToRole(string role) => (role == "n") ? Role.Teacher : Role.Student;	
	}
}

