import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { StepperComponent } from '../stepper/stepper.component';
import { ExamService } from '../services/exam.service';
import { LessonService } from '../services/lesson.service';
import { StudentService } from '../services/student.service';
import { ExamCreate } from '../models/exam.create.model';
import { Lesson } from '../models/lesson.model';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html'
})
export class SecurityComponent implements OnInit {

  @Input() model!: any;       // examModel (stepper-dən)

  lessons: Lesson[] = [];
  students: Student[] = [];

  examCreate: ExamCreate = {
    lessonId: 0,
    studentId: 0,
    examDate: '',
    grade: 0
  };

  constructor(
    public stepper: StepperComponent,
    private examService: ExamService,
    private lessonService: LessonService,
    private studentService: StudentService
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

  goNext(stepper: any) {

    // Model-dən tarix və qiymət götürürük (stepper bunu gözləyir)
    this.examCreate.examDate = this.model.examDate;
    this.examCreate.grade = this.model.grade;

    // Select-lərdən gələn ID-lər
    this.examCreate.lessonId = this.model.lessonId;
    this.examCreate.studentId = this.model.studentId;

    // VALIDATION
    if (!this.examCreate.lessonId ||
        !this.examCreate.studentId ||
        !this.examCreate.examDate ||
        this.examCreate.grade < 0) {

      Swal.fire({
        icon: 'warning',
        title: 'Xəta',
        text: 'İmtahan məlumatlarını düzgün doldurun!'
      });
      return;
    }

    // BACKENDƏ POST
    this.examService.addExam(this.examCreate).subscribe({
      next: () => {

        Swal.fire({
          icon: 'success',
          title: 'Uğurlu!',
          text: 'İmtahan əlavə edildi',
          timer: 1500,
          showConfirmButton: false
        });

        // Step 4 → Finish
        stepper.goNext();
      },

      error: () => {
        Swal.fire({
          icon: "error",
          title: "Xəta!",
          text: "İmtahan əlavə edilə bilmədi!"
        });
      }
    });
  }
}
