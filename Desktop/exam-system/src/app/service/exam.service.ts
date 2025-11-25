import { Injectable } from '@angular/core';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  exams: Exam[] = [];

  addExam(exam: Exam) {
    this.exams.push(exam);
  }

  getExams() {
    return this.exams;
  }
}
