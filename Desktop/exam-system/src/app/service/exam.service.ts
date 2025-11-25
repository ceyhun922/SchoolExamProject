import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  exams = signal<any[]>([]);

  addExam(exam: any) {
    this.exams.update(list => [...list, exam]);
  }

  getExams() {
    return this.exams();
  }
}
