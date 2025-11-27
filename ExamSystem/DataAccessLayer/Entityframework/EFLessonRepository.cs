using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using DataAccessLayer.Repositories;
using EntityLayer.Concrete;

namespace DataAccessLayer.Entityframework
{
    public class EFLessonRepository : GenericRepository<Lesson>, ILessonDAL
    {
        private readonly ExamApiDbContext _context;
        public EFLessonRepository(ExamApiDbContext context) : base(context)
        {
            _context =context;
        }
    }
}