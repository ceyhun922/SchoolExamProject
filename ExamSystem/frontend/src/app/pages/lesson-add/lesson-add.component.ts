import { Component } from '@angular/core';
import { Lesson } from 'src/app/models/lesson.model';
import { LessonService } from 'src/app/services/lesson.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.css']
})
export class LessonAddComponent {

  lesson: Lesson = {
    lessonCode: '',
    lessonName: '',
    classNumber: 1,
    teacherName: '',
    teacherSurname: ''
  };

  constructor(private lessonService: LessonService,
              private router: Router) {}

  save(form: any) {

    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Xəbərdarlıq',
        text: 'Zəhmət olmasa bütün xanaları doldurun!'
      });
      return;
    }

    this.lessonService.addLesson(this.lesson).subscribe({
      next: () => {

        Swal.fire({
          icon: 'success',
          title: 'Uğurlu!',
          text: 'Dərs əlavə edildi',
          timer: 2000,
          showConfirmButton: false
        });

        setTimeout(() => {
          this.router.navigate(['/lessons']);
        }, 2000);
      },

      error: () => {
        Swal.fire("Xəta!", "Əlavə edilə bilmədi!", "error");
      }
    });
  }
}
