﻿namespace Dziennik_Online_Backend.Models.Teacher
{
    public class GradeTypeIdWithUserGuid
    {
        public Guid UserGuid { get; set; }
        public int SubjectId { get; set; }
        public int GradeTypeId { get; set; }
    }
}
