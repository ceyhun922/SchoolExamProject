using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using DTOs.Concrete.Lesson;
using EntityLayer.Concrete;

namespace BusinessLayer.Concrete
{
    public class LessonManager : ILessonService
    {
        private readonly ILessonDAL _lessonDAL;

        //!QEYD 
        //? normalda her zaman refactoringden istifade edirem amma burda sadece 
        //? 2 Emeliyyat yer alır ve class azdır deye IGENERİCSERVİCE Yazmadım
        public LessonManager(ILessonDAL lessonDAL)
        {
            _lessonDAL = lessonDAL;
        }

        public List<LessonListDTO> GetAllList()
        {
            var lessons = _lessonDAL.GetAllList();

            var dtoList =lessons.Select(x=>new LessonListDTO
            {
                 Id =x.Id,
                 LessonCode =x.LessonCode,
                 LessonName =x.LessonName,
                 ClassNumber =x.ClassNumber,
                 TeacherName =x.TeacherName,
                 TeacherSurname =x.TeacherSurname
            }).ToList();

            return dtoList;
        }


        public void InsertService(LessonCreateDTO dto)
        {
            var lesson = new Lesson
            {
                LessonCode = dto.LessonCode,
                LessonName = dto.LessonName,
                ClassNumber = dto.ClassNumber,
                TeacherName = dto.TeacherName,
                TeacherSurname = dto.TeacherSurname
            };

            _lessonDAL.Insert(lesson);
        }
    }
}