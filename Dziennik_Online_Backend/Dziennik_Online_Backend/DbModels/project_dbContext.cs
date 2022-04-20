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

        public virtual DbSet<Class> Classes { get; set; } = null!;
        public virtual DbSet<Grade> Grades { get; set; } = null!;
        public virtual DbSet<GradeType> GradeTypes { get; set; } = null!;
        public virtual DbSet<SchoolSubject> SchoolSubjects { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

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
            modelBuilder.Entity<Class>(entity =>
            {
                entity.ToTable("Class");

                entity.Property(e => e.Department).HasMaxLength(200);
            });

            modelBuilder.Entity<Grade>(entity =>
            {
                entity.ToTable("Grade");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.TimeStamp).HasColumnType("datetime");

                entity.HasOne(d => d.GradeType)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.GradeTypeId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Ocena_RodzajOceny");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Grades)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Ocena_Użytkownicy");
            });

            modelBuilder.Entity<GradeType>(entity =>
            {
                entity.ToTable("GradeType");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.HasOne(d => d.SchoolSubject)
                    .WithMany(p => p.GradeTypes)
                    .HasForeignKey(d => d.SchoolSubjectId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RodzajOceny_Zajęcia");
            });

            modelBuilder.Entity<SchoolSubject>(entity =>
            {
                entity.ToTable("SchoolSubject");

                entity.Property(e => e.SchoolSubjectId).HasMaxLength(200);

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.SchoolSubjects)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("FK_Zajęcia _Klasa");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.SchoolSubjects)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK_Zajęcia _Użytkownicy");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.Property(e => e.Guid).HasColumnName("GUID");

                entity.Property(e => e.Login).HasMaxLength(200);

                entity.Property(e => e.Name).HasMaxLength(200);

                entity.Property(e => e.Pass).HasMaxLength(200);

                entity.Property(e => e.Permissions).HasMaxLength(200);

                entity.Property(e => e.Surname).HasMaxLength(200);

                entity.HasOne(d => d.Class)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.ClassId)
                    .HasConstraintName("FK_Użytkownicy_Klasa");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
