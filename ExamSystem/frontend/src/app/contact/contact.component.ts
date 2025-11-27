import { Component, Input } from '@angular/core';
import { Student } from '../models/student.model';
import { StepperComponent } from '../stepper/stepper.component';
import Swal from 'sweetalert2';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  @Input() model!: Student;

  constructor(
    public stepper: StepperComponent,
    private studentService: StudentService
  ) {}

  goNext(stepper: any) {

    // FRONTEND VALIDATION
    if (!this.model.studentNumber ||
        !this.model.firstName ||
        !this.model.lastName ||
        !this.model.classNumber) {

      Swal.fire({
        icon: 'warning',
        title: 'Xəta',
        text: 'Tələbə məlumatları tam doldurulmayıb!'
      });
      return;
    }

    // BACKENDƏ STUDENT GÖNDƏR
    this.studentService.addStudent(this.model).subscribe({
      next: (result) => {

        // backend id qaytarırsa onu modelə yazırıq
        if (result && result.id)
          this.model.id = result.id;

        Swal.fire({
          icon: 'success',
          title: 'Uğurlu!',
          text: 'Tələbə əlavə edildi',
          timer: 1500,
          showConfirmButton: false
        });

        // Step 3-ə keçirik
        stepper.goNext();
      },

      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Xəta!',
          text: 'Tələbə əlavə edilə bilmədi!'
        });
      }
    });
  }
}
