namespace DTOs.Concrete.Student
{
    public class StudentCreateDTO
    {
        public int StudentNumber { get; set; }
        public string FirstName { get; set; }=string.Empty;
        public string LastName { get; set; }=string.Empty;
        public int ClassNumber { get; set; }
    }
}