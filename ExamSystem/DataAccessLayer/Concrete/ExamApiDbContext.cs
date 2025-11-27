using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;
namespace DataAccessLayer.Concrete
{
    public class ExamApiDbContext : DbContext
    {
        public ExamApiDbContext(DbContextOptions<ExamApiDbContext> options) : base(options){}

        public DbSet<Lesson>? Lessons {get;set;}
        public DbSet<Student>? Students {get;set;}
        public DbSet<Exam>? Exams {get;set;}

    }
}