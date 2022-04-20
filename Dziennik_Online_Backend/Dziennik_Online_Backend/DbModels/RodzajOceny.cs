using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class RodzajOceny
    {
        public RodzajOceny()
        {
            Ocenas = new HashSet<Ocena>();
        }

        public int Id { get; set; }
        public string Nazwa { get; set; } = null!;
        public int Waga { get; set; }
        public int ZajęciaId { get; set; }

        public virtual Zajęcium Zajęcia { get; set; } = null!;
        public virtual ICollection<Ocena> Ocenas { get; set; }
    }
}
