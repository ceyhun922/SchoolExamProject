import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];

  constructor() { }

  addStudent(student: Student) {
    this.students.push({
      ...student,
      id: this.students.length + 1
    });
  }

  getStudents() {
    return this.students;
  }
}
