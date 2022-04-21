using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class Grade
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public string? Commentary { get; set; }
        public DateTime TimeStamp { get; set; }
        public int UserId { get; set; }
        public int GradeTypeId { get; set; }

        public virtual GradeType GradeType { get; set; } = null!;
        public virtual User User { get; set; } = null!;
    }
}
