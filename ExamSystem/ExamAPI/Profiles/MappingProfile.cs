using AutoMapper;
using DTOs.Concrete;
using DTOs.Concrete.Exam;
using DTOs.Concrete.Lesson;
using DTOs.Concrete.Student;
using EntityLayer.Concrete;

namespace ExamAPI.Profiles
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Lesson, LessonCreateDTO>();
            CreateMap<Lesson, LessonListDTO>();

            CreateMap<Student, StudentCreateDTO>();
            CreateMap<Student, StudentListDTO>();

            CreateMap<ExamCreateDTO, Exam>();

            CreateMap<Exam, FullExamDTO>()
            .ForMember(dest => dest.Id,
               opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.LessonCode,
                opt => opt.MapFrom(src => src.Lesson.LessonCode))
            .ForMember(dest => dest.LessonName,
                opt => opt.MapFrom(src => src.Lesson.LessonName))
            .ForMember(dest => dest.StudentNumber,
                opt => opt.MapFrom(src => src.Student.StudentNumber))
            .ForMember(dest => dest.StudentFirstName,
                opt => opt.MapFrom(src => src.Student.FirstName))
            .ForMember(dest => dest.StudentLastName,
                opt => opt.MapFrom(src => src.Student.LastName))
            .ForMember(dest => dest.TeacherFirstName,
                opt => opt.MapFrom(src => src.Lesson.TeacherName))
            .ForMember(dest => dest.TeacherLastName,
                opt => opt.MapFrom(src => src.Lesson.TeacherSurname))
             .ForMember(dest => dest.ExamDate,
               opt => opt.MapFrom(src => src.ExamDate))
            .ForMember(dest => dest.Grade,
               opt => opt.MapFrom(src => src.Grade));
        }
    }
}