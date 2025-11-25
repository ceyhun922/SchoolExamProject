import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  getStudents() {
    return this.students;
  }
}
