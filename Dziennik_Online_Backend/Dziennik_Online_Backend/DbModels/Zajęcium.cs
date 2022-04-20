using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class Zajęcium
    {
        public Zajęcium()
        {
            RodzajOcenies = new HashSet<RodzajOceny>();
        }

        public int Id { get; set; }
        public string? NazwaPrzedmiotu { get; set; }
        public int? KlasaId { get; set; }
        public int? OsobaProwadzcaId { get; set; }

        public virtual Klasa? Klasa { get; set; }
        public virtual Użytkownicy? OsobaProwadzca { get; set; }
        public virtual ICollection<RodzajOceny> RodzajOcenies { get; set; }
    }
}
