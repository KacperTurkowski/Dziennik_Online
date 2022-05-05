using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class SchoolSubject
    {
        public SchoolSubject()
        {
            GradeTypes = new HashSet<GradeType>();
        }

        public int Id { get; set; }
        public string SchoolSubjectName { get; set; } = null!;
        public int ClassId { get; set; }
        public int? UserId { get; set; }

        public virtual Class Class { get; set; } = null!;
        public virtual User? User { get; set; }
        public virtual ICollection<GradeType> GradeTypes { get; set; }
    }
}
