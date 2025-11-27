using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using DataAccessLayer.Repositories;
using EntityLayer.Concrete;

namespace DataAccessLayer.Entityframework
{
    public class EFStudentRepository : GenericRepository<Student>, IStudentDAL
    {
        private readonly ExamApiDbContext _context;
        public EFStudentRepository(ExamApiDbContext context) : base(context)
        {
            _context =context;
        }
    }
}