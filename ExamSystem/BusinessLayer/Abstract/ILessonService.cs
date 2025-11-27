using DTOs.Concrete.Lesson;
using EntityLayer.Concrete;

namespace BusinessLayer.Abstract
{
    public interface ILessonService
    {
        void InsertService(LessonCreateDTO dto);

        List<LessonListDTO> GetAllList();
    }
}