namespace DTOs.Concrete.Exam
{
    public class FullExamDTO
    {
        public int Id { get; set; }

        public string LessonCode { get; set; } = string.Empty;
        public string LessonName { get; set; } = string.Empty;

        public int StudentNumber { get; set; }

        public string StudentFirstName { get; set; } = string.Empty;
        public string StudentLastName { get; set; } = string.Empty;

        public string TeacherFirstName { get; set; } = string.Empty;
        public string TeacherLastName { get; set; } = string.Empty;

        public DateTime ExamDate { get; set; }
        public decimal Grade { get; set; }
    }
}