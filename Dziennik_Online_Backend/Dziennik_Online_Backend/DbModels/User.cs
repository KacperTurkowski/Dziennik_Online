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
        public string Login { get; set; } = null!;
        public string Pass { get; set; } = null!;
        public string Permissions { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public Guid Guid { get; set; }
        public int ClassId { get; set; }

        public virtual ICollection<Grade> Grades { get; set; }
        public virtual ICollection<SchoolSubject> SchoolSubjects { get; set; }
    }
}
