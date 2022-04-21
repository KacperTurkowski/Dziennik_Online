using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class GradeType
    {
        public GradeType()
        {
            Grades = new HashSet<Grade>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Weight { get; set; }
        public int SchoolSubjectId { get; set; }

        public virtual SchoolSubject SchoolSubject { get; set; } = null!;
        public virtual ICollection<Grade> Grades { get; set; }
    }
}
