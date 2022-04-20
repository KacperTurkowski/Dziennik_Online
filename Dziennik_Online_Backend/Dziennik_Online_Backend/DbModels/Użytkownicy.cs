using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class Użytkownicy
    {
        public Użytkownicy()
        {
            Ocenas = new HashSet<Ocena>();
            Zajęcia = new HashSet<Zajęcium>();
        }

        public int UżytkownikId { get; set; }
        public string? Login { get; set; }
        public string? Hasło { get; set; }
        public string? Uprawnienia { get; set; }
        public string? Imię { get; set; }
        public string? Nazwisko { get; set; }
        public Guid? Guid { get; set; }
        public int? Klasa { get; set; }

        public virtual Klasa? KlasaNavigation { get; set; }
        public virtual ICollection<Ocena> Ocenas { get; set; }
        public virtual ICollection<Zajęcium> Zajęcia { get; set; }
    }
}
