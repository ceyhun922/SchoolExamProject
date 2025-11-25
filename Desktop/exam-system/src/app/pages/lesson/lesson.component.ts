import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { LessonService } from '../../service/lesson.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [FormsModule, StepperComponent],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {

  constructor(
    private lessonService: LessonService,
    private router: Router
  ) {}

  lesson = {
    lessonCode: '',
    lessonName: '',
    classNumber: 1,
    teacherName: '',
    teacherSurname: ''
  };

  save() {
    this.lessonService.addLesson(this.lesson);
    alert('Lesson saved!');

    this.lesson = {
      lessonCode: '',
      lessonName: '',
      classNumber: 1,
      teacherName: '',
      teacherSurname: ''
    };

    this.router.navigate(['/student']);
  }
}
