import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();

  }

  loadStudents() {
    this.studentService.getStudents().subscribe(
      res => {
        this.students = res;
        console.log("Şagird listi:", this.students);
      },
      err => {
        console.error("Dərs listi çəkilə bilmədi", err);
      }
    )
  }

}


/*

this.students = [
   { id: 1, studentNumber: 101, firstName: 'Murad', lastName: 'Hüseynov', classNumber: 7 },
   { id: 2, studentNumber: 102, firstName: 'Aynur', lastName: 'Əliyeva', classNumber: 6 }
 ]; */