using System;
using System.Collections.Generic;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class Ocena
    {
        public int Id { get; set; }
        public int Wartość { get; set; }
        public string? Komentarz { get; set; }
        public DateTime DataWystawienia { get; set; }
        public int OsobaOtrzymującaOcenęId { get; set; }
        public int RodzajOcenyId { get; set; }

        public virtual Użytkownicy OsobaOtrzymującaOcenę { get; set; } = null!;
        public virtual RodzajOceny RodzajOceny { get; set; } = null!;
    }
}
