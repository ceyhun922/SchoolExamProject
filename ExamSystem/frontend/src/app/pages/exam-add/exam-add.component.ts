import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/models/lesson.model';
import { Student } from 'src/app/models/student.model';
import { ExamService } from 'src/app/services/exam.service';
import { LessonService } from 'src/app/services/lesson.service';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ExamCreate } from 'src/app/models/exam.create.model';

@Component({
  selector: 'app-exam-add',
  templateUrl: './exam-add.component.html',
  styleUrls: ['./exam-add.component.css']
})
export class ExamAddComponent implements OnInit {

  exam: ExamCreate = {
    lessonId: 0,
    studentId: 0,
    examDate: '',
    grade: 0
  };

  lessons: Lesson[] = [];
  students: Student[] = [];

  constructor(
    private examService: ExamService,
    private lessonService: LessonService,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLessons();
    this.loadStudents();
  }

  loadLessons() {
    this.lessonService.getLessons().subscribe(res => {
      this.lessons = res;
    });
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(res => {
      this.students = res;
    });
  }

  save(form: any) {

    // ⚠ Bütün inputları touched eləyək ki xətalar görünsün
    Object.values(form.controls).forEach((control: any) => {
      control.markAsTouched();
    });

    // ❌ Form boşdursa SweetAlert2 çıxır
    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Xəbərdarlıq',
        text: 'Zəhmət olmasa bütün xanaları doldurun!'
      });
      return;
    }

    // ✅ Form düzgündür — POST atılır
    this.examService.addExam(this.exam).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Uğurlu!',
          text: 'İmtahan əlavə edildi',
          timer: 2000,
          showConfirmButton: false
        });

        setTimeout(() => {
          this.router.navigate(['/exams']);
        }, 2000);
      },

      error: () => {
        Swal.fire("Xəta!", "İmtahan əlavə edilə bilmədi!", "error");
      }
    });
  }
}
