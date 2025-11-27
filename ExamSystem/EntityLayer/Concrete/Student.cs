using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EntityLayer.Concrete
{
    public class Student
    {
        [Key]
        public int Id { get; set; }
        [Column(TypeName = "decimal(5,0)")]   
        public int StudentNumber { get; set; }

        [Column(TypeName = "varchar(30)")]
        [StringLength(30)]
        public string FirstName { get; set; } = string.Empty;

        [Column(TypeName = "varchar(30)")]
        [StringLength(30)]
        public string LastName { get; set; } = string.Empty;

        [Column(TypeName = "decimal(2,0)")]   
        public int ClassNumber { get; set; }
        public IList<Exam>? Exams { get; set; }

    }
}