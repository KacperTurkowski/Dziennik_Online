using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Dziennik_Online_Backend.DbModels
{
    public partial class project_dbContext : DbContext
    {
        public project_dbContext()
        {
        }

        public project_dbContext(DbContextOptions<project_dbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Klasa> Klasas { get; set; } = null!;
        public virtual DbSet<Ocena> Ocenas { get; set; } = null!;
        public virtual DbSet<RodzajOceny> RodzajOcenies { get; set; } = null!;
        public virtual DbSet<Użytkownicy> Użytkownicies { get; set; } = null!;
        public virtual DbSet<Zajęcium> Zajęcia { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=tcp:projectdb1.database.windows.net,1433;Initial Catalog=project_db;Persist Security Info=False;User ID=external_admin;Password=5AT2OUfQvBqerfRlu0ZY;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Klasa>(entity =>
            {
                entity.ToTable("Klasa");

                entity.Property(e => e.Oddział).HasMaxLength(200);
            });

            modelBuilder.Entity<Ocena>(entity =>
            {
                entity.ToTable("Ocena");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.DataWystawienia).HasColumnType("datetime");

                entity.HasOne(d => d.OsobaOtrzymującaOcenę)
                    .WithMany(p => p.Ocenas)
                    .HasForeignKey(d => d.OsobaOtrzymującaOcenęId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Ocena_Użytkownicy");

                entity.HasOne(d => d.RodzajOceny)
                    .WithMany(p => p.Ocenas)
                    .HasForeignKey(d => d.RodzajOcenyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Ocena_RodzajOceny");
            });

            modelBuilder.Entity<RodzajOceny>(entity =>
            {
                entity.ToTable("RodzajOceny");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.HasOne(d => d.Zajęcia)
                    .WithMany(p => p.RodzajOcenies)
                    .HasForeignKey(d => d.ZajęciaId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RodzajOceny_Zajęcia");
            });

            modelBuilder.Entity<Użytkownicy>(entity =>
            {
                entity.HasKey(e => e.UżytkownikId)
                    .HasName("dbo.Użytkownicy");

                entity.ToTable("Użytkownicy");

                entity.Property(e => e.Guid).HasColumnName("GUID");

                entity.Property(e => e.Hasło).HasMaxLength(200);

                entity.Property(e => e.Imię).HasMaxLength(200);

                entity.Property(e => e.Login).HasMaxLength(200);

                entity.Property(e => e.Nazwisko).HasMaxLength(200);

                entity.Property(e => e.Uprawnienia).HasMaxLength(200);

                entity.HasOne(d => d.KlasaNavigation)
                    .WithMany(p => p.Użytkownicies)
                    .HasForeignKey(d => d.Klasa)
                    .HasConstraintName("FK_Użytkownicy_Klasa");
            });

            modelBuilder.Entity<Zajęcium>(entity =>
            {
                entity.Property(e => e.NazwaPrzedmiotu).HasMaxLength(200);

                entity.HasOne(d => d.Klasa)
                    .WithMany(p => p.Zajęcia)
                    .HasForeignKey(d => d.KlasaId)
                    .HasConstraintName("FK_Zajęcia _Klasa");

                entity.HasOne(d => d.OsobaProwadzca)
                    .WithMany(p => p.Zajęcia)
                    .HasForeignKey(d => d.OsobaProwadzcaId)
                    .HasConstraintName("FK_Zajęcia _Użytkownicy");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
