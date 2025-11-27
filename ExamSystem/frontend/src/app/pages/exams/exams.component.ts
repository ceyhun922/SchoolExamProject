import { Component } from '@angular/core';
import { Exam } from 'src/app/models/exam.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent {

  exams: Exam[] = [];

  constructor(private examService: ExamService) { }


  ngOnInit(): void {
    this.LoadExams();
  }

  LoadExams() {
    this.examService.getExams().subscribe(
      res => {
        this.exams = res;
        console.log("Dərs listi:", this.exams);
      },
      err => {
        console.error("Imtahan listi çəkilə bilmədi", err);
      }
    )
  }

}
