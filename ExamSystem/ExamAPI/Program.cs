using BusinessLayer.Abstract;
using BusinessLayer.Concrete;
using DataAccessLayer.Abstract;
using DataAccessLayer.Concrete;
using DataAccessLayer.Entityframework;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

builder.Services.AddDbContext<ExamApiDbContext>(opt =>
{
    opt.UseSqlServer(builder.Configuration.GetConnectionString("ExamApiConnection"),t=>t.MigrationsAssembly("ExamAPI"));
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", p => p
        .AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin());
});


builder.Services.AddScoped<ILessonService, LessonManager>();
builder.Services.AddScoped<ILessonDAL, EFLessonRepository>();
builder.Services.AddScoped<IStudentDAL, EFStudentRepository>();
builder.Services.AddScoped<IStudentService, StudentManager>();
builder.Services.AddScoped<IExamDAL, EFExamRepository>();
builder.Services.AddScoped<IExamService, ExamManager>();

builder.Services.AddAutoMapper(typeof(Program));


var app = builder.Build();

app.UseCors("AllowAll");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.MapControllers();
app.Run();

