using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class Class
    {
        public Class()
        {
            SchoolSubjects = new HashSet<SchoolSubject>();
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public int? Year { get; set; }
        public string? Department { get; set; }

        public virtual ICollection<SchoolSubject> SchoolSubjects { get; set; }
        public virtual ICollection<User> Users { get; set; }
    }
}
