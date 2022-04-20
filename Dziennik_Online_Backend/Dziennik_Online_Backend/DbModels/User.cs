using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class User
    {
        public User()
        {
            Grades = new HashSet<Grade>();
            SchoolSubjects = new HashSet<SchoolSubject>();
        }

        public int Id { get; set; }
        public string? Login { get; set; }
        public string? Pass { get; set; }
        public string? Permissions { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public Guid? Guid { get; set; }
        public int? ClassId { get; set; }

        public virtual Class? Class { get; set; }
        public virtual ICollection<Grade> Grades { get; set; }
        public virtual ICollection<SchoolSubject> SchoolSubjects { get; set; }
    }
}
