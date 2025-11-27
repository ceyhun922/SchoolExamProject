using BusinessLayer.Abstract;
using DTOs.Concrete.Exam;
using Microsoft.AspNetCore.Mvc;

namespace ExamAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExamController : ControllerBase
    {
        private readonly IExamService _examService;

        public ExamController(IExamService examService)
        {
            _examService = examService;
        }

        [HttpPost("Create")]
        public IActionResult CreateExam(ExamCreateDTO dto)
        {
            _examService.InsertService(dto);
            return Ok(new {message ="İmtahan Elave Olundu"});
        }

        [HttpGet]
        public IActionResult ExamList()
        {
            var exams =_examService.GetAllList();
            return Ok(exams);
        }
    }
}