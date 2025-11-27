using EntityLayer.Concrete;

namespace DataAccessLayer.Abstract
{
    public interface IExamDAL : IGenericDAL<Exam>
    {
        public List<Exam> GetAllFullExams();
    }
}