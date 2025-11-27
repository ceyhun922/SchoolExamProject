using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using DataAccessLayer.Repositories;
using EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;

namespace DataAccessLayer.Entityframework
{
    public class EFExamRepository : GenericRepository<Exam>, IExamDAL
    {
        private readonly ExamApiDbContext _context;
        public EFExamRepository(ExamApiDbContext context) : base(context)
        {
            _context =context;
        }

        public List<Exam> GetAllFullExams()
        {
            return _context.Exams.Include(e =>e.Lesson).Include(e=>e.Student).ToList();
        }
    }
}