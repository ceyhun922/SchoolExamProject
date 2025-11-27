using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityLayer.Concrete
{
    public class Exam
    {
        [Key]
        public int Id { get; set; }

        public int LessonId { get; set; }
        public Lesson? Lesson { get; set; }
        public int StudentId { get; set; }
        public Student? Student { get; set; }
        [Column(TypeName = "date")]
        public DateTime ExamDate { get; set; }

        [Column(TypeName = "decimal(1,0)")]  
        public decimal Grade { get; set; }


    }
}