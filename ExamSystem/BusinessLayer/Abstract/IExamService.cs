using DTOs.Concrete.Exam;
using EntityLayer.Concrete;

namespace BusinessLayer.Abstract
{
    public interface IExamService 
    {
        void InsertService(ExamCreateDTO dto);

        List<FullExamDTO> GetAllList();
    }
}