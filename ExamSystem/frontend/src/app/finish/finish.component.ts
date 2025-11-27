import { Component, Input } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { Student } from '../models/student.model';
import { Exam } from '../models/exam.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html'
})
export class FinishComponent {

  @Input() lesson: Lesson = {
    id: 0,
    lessonCode: '',
    lessonName: '',
    classNumber: 0,
    teacherName: '',
    teacherSurname: ''
  };

  @Input() student: Student = {
    studentNumber: 0,
    firstName: '',
    lastName: '',
    classNumber: 0
  };

  @Input() exam: Exam = {
    lessonCode: '',
    lessonName: '',
    studentNumber: 0,
    studentFirstName: '',
    studentLastName: '',
    teacherFirstName: '',
    teacherLastName: '',
    examDate: '',
    grade: 0
  };

  finish() {
    const finalData = {
      lesson: this.lesson,
      student: this.student,
      exam: this.exam
    };

    Swal.fire({
      icon: 'success',
      title: 'Uğurlu!',
      text: 'Bütün məlumatlar tamamlandı!'
    });

    console.log(finalData);
  }
}
