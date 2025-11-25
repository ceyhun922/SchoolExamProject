import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  standalone: true,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

  constructor(private router: Router) {}

  go(step: number) {
    if (step === 1) this.router.navigate(['/lesson']);
    if (step === 2) this.router.navigate(['/student']);
    if (step === 3) this.router.navigate(['/exam']);
  }

  isActiveStep(step: number): boolean {
    const url = this.router.url;
    if (step === 1) return url.includes('lesson');
    if (step === 2) return url.includes('student');
    if (step === 3) return url.includes('exam');
    return false;
  }

  isDone(step: number): boolean {
    const url = this.router.url;

    if (step === 1) return url.includes('student') || url.includes('exam');
    if (step === 2) return url.includes('exam');

    return false;
  }
}
