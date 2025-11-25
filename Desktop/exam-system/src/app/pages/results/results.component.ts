import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../service/exam.service';
import { StepperComponent } from '../../shared/stepper/stepper.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, NgFor, StepperComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {

  exams: any[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.exams = this.examService.getExams();
  }
}
