namespace DTOs.Concrete.Student
{
    public class StudentListDTO
    {
        public int Id { get; set; }
        public int StudentNumber { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public int ClassNumber { get; set; }
    }
}