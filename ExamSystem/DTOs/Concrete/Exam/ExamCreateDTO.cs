namespace DTOs.Concrete.Exam
{
    public class ExamCreateDTO
    {
        public int LessonId { get; set; }
        public int StudentId { get; set; }
        public DateTime ExamDate { get; set; }
        public int Grade { get; set; }
    }
}