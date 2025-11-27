using AutoMapper;
using BusinessLayer.Abstract;
using DTOs.Concrete;
using DTOs.Concrete.Lesson;
using Microsoft.AspNetCore.Mvc;

namespace ExamAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class LessonController : ControllerBase
    {
        private readonly ILessonService _lessonService;

        public LessonController(ILessonService lessonService)
        {
            _lessonService = lessonService;
        }

        [HttpPost("Create")]
        public IActionResult CreateLesson(LessonCreateDTO dto)
        {
            _lessonService.InsertService(dto);
            return Ok(new {message ="Ders Elave Olundu"});
        }
        
        [HttpGet]
        public IActionResult Lessonlist()
        {
            var lessons =_lessonService.GetAllList();
            return Ok(lessons);
        }
    }
}