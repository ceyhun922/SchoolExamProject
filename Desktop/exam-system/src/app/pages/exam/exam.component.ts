import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LessonService } from '../../service/lesson.service';
import { StudentService } from '../../service/student.service';
import { ExamService } from '../../service/exam.service';
import { FormsModule } from '@angular/forms';
import { StepperComponent } from '../../shared/stepper/stepper.component';

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [FormsModule, StepperComponent],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent implements OnInit {

  lessons: any[] = [];
  students: any[] = [];

  exam = {
    lessonId: 0,
    studentId: 0,
    examDate: '',
    point: 0
  };

  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
    private examService: ExamService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lessons = this.lessonService.lessons();
    this.students = this.studentService.students;

  }

  save() {
    const lesson = this.lessons.find((x: any) => x.id == this.exam.lessonId);
    const student = this.students.find((x: any) => x.id == this.exam.studentId);

    const finalExam = {
      lessonName: lesson?.lessonName,
      studentName: `${student?.firstName} ${student?.lastName}`,
      examDate: this.exam.examDate,
      point: this.exam.point
    };

    this.examService.addExam(finalExam);

    this.router.navigate(['/results']);
  }
}
