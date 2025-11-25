import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [NgIf],
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

  // Step 1 — Student və Exam-da DONE olmalıdır
  if (step === 1) return url.includes('student') || url.includes('exam');

  // Step 2 — Exam-da DONE olmalıdır
  if (step === 2) return url.includes('exam');

  return false;
}


  showBack(): boolean {
    const url = this.router.url;
    return url.includes('student') || url.includes('exam');
  }

  goBack() {
    const url = this.router.url;

    if (url.includes('student'))
      this.router.navigate(['/lesson']);   // Student → Lesson

    else if (url.includes('exam'))
      this.router.navigate(['/student']);  // Exam → Student
  }
}
