using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class Klasa
    {
        public Klasa()
        {
            Użytkownicies = new HashSet<Użytkownicy>();
            Zajęcia = new HashSet<Zajęcium>();
        }

        public int Id { get; set; }
        public int? Rok { get; set; }
        public string? Oddział { get; set; }

        public virtual ICollection<Użytkownicy> Użytkownicies { get; set; }
        public virtual ICollection<Zajęcium> Zajęcia { get; set; }
    }
}
