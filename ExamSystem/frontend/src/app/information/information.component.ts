import { Component, Input } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { StepperComponent } from '../stepper/stepper.component';
import Swal from 'sweetalert2';
import { LessonService } from '../services/lesson.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html'
})
export class InformationComponent {

  @Input() model!: Lesson;

  constructor(
    public stepper: StepperComponent,
    private lessonService: LessonService
  ) {}

  goNext(stepper: any) {

    // FRONTEND VALIDATION
    if (!this.model.lessonCode || !this.model.lessonName || !this.model.classNumber ||
        !this.model.teacherName || !this.model.teacherSurname) {

      Swal.fire({
        icon: 'warning',
        title: 'Xəta',
        text: 'Zəhmət olmasa bütün dərs məlumatlarını doldurun!'
      });

      return;
    }

    // BACKENDƏ DƏRS GÖNDƏR (AYNI lesson-add kimi)
    this.lessonService.addLesson(this.model).subscribe({
      next: (result) => {

        // Cavabdan gələn id-ni model-ə yaz
        if (result && result.id)
          this.model.id = result.id;

        Swal.fire({
          icon: 'success',
          title: 'Uğurlu!',
          text: 'Dərs əlavə edildi'
        });

        // Stepper növbəti addıma keçsin
        stepper.goNext();
      },

      error: () => {
        Swal.fire({
          icon: "error",
          title: "Xəta!",
          text: "Dərs əlavə edilə bilmədi!"
        });
      }
    });

  }
}
