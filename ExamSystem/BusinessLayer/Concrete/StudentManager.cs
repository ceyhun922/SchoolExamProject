using BusinessLayer.Abstract;
using DataAccessLayer.Abstract;
using DTOs.Concrete.Lesson;
using DTOs.Concrete.Student;
using EntityLayer.Concrete;

namespace BusinessLayer.Concrete
{
    public class StudentManager : IStudentService
    {
        private readonly IStudentDAL _studentDAL;

        public StudentManager(IStudentDAL studentDAL)
        {
            _studentDAL = studentDAL;
        }

        public List<StudentListDTO> GetAllList()
        {
            var students =_studentDAL.GetAllList();

            var dtoList =students.Select(x=>new StudentListDTO
            {
                Id =x.Id,
                StudentNumber =x.StudentNumber,
                FirstName =x.FirstName,
                LastName =x.LastName,
                ClassNumber =x.ClassNumber
            }).ToList();

            return dtoList;
        }

        public void InsertService(StudentCreateDTO dto)
        {
            var student =new Student
            {
                StudentNumber =dto.StudentNumber,
                FirstName =dto.FirstName,
                LastName =dto.LastName,
                ClassNumber =dto.ClassNumber
            };

            _studentDAL.Insert(student);
        }
    }
}