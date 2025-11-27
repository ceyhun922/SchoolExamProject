using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityLayer.Concrete
{
    public class Lesson
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "char(3)")]
    [StringLength(3)]
    public string LessonCode { get; set; } = string.Empty;

    [Column(TypeName = "varchar(30)")]
    [StringLength(30)]
    public string LessonName { get; set; } = string.Empty;

    [Column(TypeName = "decimal(2,0)")]
    public int ClassNumber { get; set; }

    [Column(TypeName = "varchar(20)")]
    [StringLength(20)]
    public string TeacherName { get; set; } = string.Empty;

    [Column(TypeName = "varchar(20)")]
    [StringLength(20)]
    public string TeacherSurname { get; set; } = string.Empty;

        public IList<Exam>? Exams {get;set;}
    }
}