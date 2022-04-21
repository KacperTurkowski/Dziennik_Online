using System;
using System.Text.Json.Serialization;

namespace Dziennik_Online_Backend.Models
{
	[JsonConverter(typeof(JsonStringEnumConverter))]
	public enum Role
	{
		Student,
		Teacher
	}
}

