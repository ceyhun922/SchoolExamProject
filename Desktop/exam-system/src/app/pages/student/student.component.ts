import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '../../shared/stepper/stepper.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, StepperComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  student = {
    studentNumber: 0,
    firstName: '',
    lastName: '',
    classNumber: 1
  };

  constructor(private router: Router) {}

  save() {
    alert("Student saved!");
    this.router.navigate(['/lesson']);
  }
}
