using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using DTOs.Concrete.Exam;
using EntityLayer.Concrete;

namespace BusinessLayer.Concrete
{
    public class ExamManager : IExamService
    {
        private readonly IExamDAL _examDAL;

        public ExamManager(IExamDAL examDAL)
        {
            _examDAL = examDAL;
        }

        public List<FullExamDTO> GetAllList()
        {
            var exams = _examDAL.GetAllFullExams();

            var dtoList = exams.Select(x => new FullExamDTO
            {
                LessonCode = x.Lesson.LessonCode,
                LessonName = x.Lesson.LessonName,

                StudentNumber = x.Student.StudentNumber,
                StudentFirstName = x.Student.FirstName,
                StudentLastName = x.Student.LastName,

                TeacherFirstName = x.Lesson.TeacherName,
                TeacherLastName = x.Lesson.TeacherSurname,

                ExamDate = x.ExamDate,
                Grade = x.Grade
            }).ToList();

            return dtoList;
        }

        public void InsertService(ExamCreateDTO dto)
        {
            var exam = new Exam
            {
                LessonId = dto.LessonId,
                StudentId = dto.StudentId,
                ExamDate = dto.ExamDate,
                Grade = dto.Grade
            };

            _examDAL.Insert(exam);
        }
    }
}