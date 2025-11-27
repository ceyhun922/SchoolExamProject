using DTOs.Concrete.Student;
using EntityLayer.Concrete;

namespace BusinessLayer.Abstract
{
    public interface IStudentService 
    {
        void InsertService(StudentCreateDTO dto);

        List<StudentListDTO> GetAllList();
    }
}