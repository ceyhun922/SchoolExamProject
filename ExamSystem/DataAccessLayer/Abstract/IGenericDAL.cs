namespace DataAccessLayer.Abstract
{
    public interface IGenericDAL<T> where T : class
    {
        List<T> GetAllList();

        T GetById(int id);

        void Insert(T t);
    }
}