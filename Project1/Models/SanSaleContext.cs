using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Project1.Models
{
    public partial class SanSaleContext : DbContext
    {
        public SanSaleContext()
        {
        }

        public SanSaleContext(DbContextOptions<SanSaleContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admins { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<Content> Contents { get; set; }
        public virtual DbSet<ContentTag> ContentTags { get; set; }
        public virtual DbSet<Footer> Footers { get; set; }
        public virtual DbSet<Image> Images { get; set; }
        public virtual DbSet<Menu> Menus { get; set; }
        public virtual DbSet<MenuType> MenuTypes { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<RefreshToken> RefreshTokens { get; set; }
        public virtual DbSet<Slide> Slides { get; set; }
        public virtual DbSet<Tag> Tags { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Name=SansaleDB");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("Admin");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(50);

                entity.Property(e => e.Role)
                    .IsRequired()
                    .HasColumnName("role")
                    .HasMaxLength(10)
                    .IsFixedLength();

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.ToTable("Category");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.MetaTitle).HasMaxLength(150);

                entity.Property(e => e.NameCategory).HasMaxLength(50);
            });

            modelBuilder.Entity<Contact>(entity =>
            {
                entity.ToTable("Contact");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Content).HasColumnType("ntext");
            });

            modelBuilder.Entity<Content>(entity =>
            {
                entity.ToTable("Content");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.Content1)
                    .HasColumnName("Content")
                    .HasColumnType("ntext");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.Detail).HasColumnType("ntext");

                entity.Property(e => e.Image).HasMaxLength(250);

                entity.Property(e => e.Language)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.MetaDescriptions)
                    .HasMaxLength(250)
                    .IsFixedLength();

                entity.Property(e => e.MetaKeywords).HasMaxLength(250);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name).HasMaxLength(250);

                entity.Property(e => e.Tags).HasMaxLength(250);

                entity.Property(e => e.TopHot).HasColumnType("datetime");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Contents)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Content__Categor__2A4B4B5E");

                entity.HasOne(d => d.TagsNavigation)
                    .WithMany(p => p.Contents)
                    .HasForeignKey(d => d.Tags)
                    .HasConstraintName("FK__Content__Tags__2B3F6F97");
            });

            modelBuilder.Entity<ContentTag>(entity =>
            {
                entity.HasKey(e => new { e.ContentId, e.TagId });

                entity.ToTable("ContentTag");

                entity.Property(e => e.ContentId).HasColumnName("ContentID");

                entity.Property(e => e.TagId)
                    .HasColumnName("TagID")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Footer>(entity =>
            {
                entity.ToTable("Footer");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Image>(entity =>
            {
                entity.ToTable("Image");

                entity.Property(e => e.NameImage)
                    .HasColumnName("nameImage")
                    .HasMaxLength(50)
                    .IsFixedLength();
            });

            modelBuilder.Entity<Menu>(entity =>
            {
                entity.ToTable("Menu");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Link).HasMaxLength(250);

                entity.Property(e => e.Target).HasMaxLength(50);

                entity.Property(e => e.Text).HasMaxLength(50);

                entity.Property(e => e.TypeId).HasColumnName("TypeID");

                entity.HasOne(d => d.Type)
                    .WithMany(p => p.Menus)
                    .HasForeignKey(d => d.TypeId)
                    .HasConstraintName("FK__Menu__TypeID__34C8D9D1");
            });

            modelBuilder.Entity<MenuType>(entity =>
            {
                entity.ToTable("MenuType");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.ToTable("Product");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

                entity.Property(e => e.Code)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(500);

                entity.Property(e => e.Detail).HasColumnType("ntext");

                entity.Property(e => e.Image).HasMaxLength(250);

                entity.Property(e => e.IncludedVat).HasColumnName("IncludedVAT");

                entity.Property(e => e.Link)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.MetaDescriptions)
                    .HasMaxLength(250)
                    .IsFixedLength();

                entity.Property(e => e.MetaKeywords).HasMaxLength(250);

                entity.Property(e => e.MetaTitle)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.MoreImages).HasColumnType("xml");

                entity.Property(e => e.Name).HasMaxLength(250);

                entity.Property(e => e.Price).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.PromotionPrice).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.TopHot).HasColumnType("datetime");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Product__Categor__2E1BDC42");
            });

            modelBuilder.Entity<RefreshToken>(entity =>
            {
                entity.HasKey(e => e.TokenId)
                    .HasName("pk_refeshtoken");

                entity.ToTable("RefreshToken");

                entity.Property(e => e.TokenId).HasColumnName("token_id");

                entity.Property(e => e.AdminId).HasColumnName("admin_id");

                entity.Property(e => e.ExpiryDate)
                    .HasColumnName("expiry_date")
                    .HasColumnType("datetime");

                entity.Property(e => e.Token)
                    .IsRequired()
                    .HasColumnName("token")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.Admin)
                    .WithMany(p => p.RefreshTokens)
                    .HasForeignKey(d => d.AdminId)
                    .HasConstraintName("FK__RefreshTo__admin__5FB337D6");
            });

            modelBuilder.Entity<Slide>(entity =>
            {
                entity.ToTable("Slide");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.Description).HasMaxLength(50);

                entity.Property(e => e.Image).HasMaxLength(250);

                entity.Property(e => e.Link).HasMaxLength(250);

                entity.Property(e => e.ModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");
            });

            modelBuilder.Entity<Tag>(entity =>
            {
                entity.ToTable("Tag");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasMaxLength(250);

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
