import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LessonService } from '../../service/lesson.service';
import { StudentService } from '../../service/student.service';
import { ExamService } from '../../service/exam.service';
import { StepperComponent } from '../../shared/stepper/stepper.component';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [FormsModule, StepperComponent],
  templateUrl: './exam.component.html',
  
  styleUrl: './exam.component.css'
})
export class ExamComponent {

  lessons: any;
  students: any;

  exam = {
    lessonId: 0,
    studentId: 0,
    examDate: '',
    point: 0
  };

  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
    private examService: ExamService
  ) {
    // ⭐ Constructor içində initialize edirik → XƏTA YOX OLUR
    this.lessons = this.lessonService.lessons;
    this.students = this.studentService.students;
  }

  save() {
    this.examService.addExam(this.exam);
    alert("Exam saved!");

    this.exam = {
      lessonId: 0,
      studentId: 0,
      examDate: '',
      point: 0
    };
  }

  
}
