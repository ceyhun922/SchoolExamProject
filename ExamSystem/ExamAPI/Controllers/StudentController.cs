using BusinessLayer.Abstract;
using DTOs.Concrete.Student;
using Microsoft.AspNetCore.Mvc;

namespace ExamAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly IStudentService _studentService;

        
        public StudentController(IStudentService studentService)
        {
            _studentService = studentService;
        }
        [HttpGet()]
        public IActionResult StudentList()
        {
            var students =_studentService.GetAllList();
            return Ok(students);
        }

        [HttpPost("Create")]
        public IActionResult CreateStudent(StudentCreateDTO dto)
        {
            _studentService.InsertService(dto);
            return Ok(new { message = "Şagird Elave Olundu" });
        } 
    }
}