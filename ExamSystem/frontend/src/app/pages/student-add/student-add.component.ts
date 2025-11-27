import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  student: Student = {
    studentNumber: 0,
    firstName: '',
    lastName: '',
    classNumber: 0
  }

  constructor(private studentService: StudentService,
    private router: Router) { }

  save(form: any) {
    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Xəbərdarlıq',
        text: 'Zəhmət olmasa bütün xanaları doldurun!'
      });
      return;
    }

 this.studentService.addStudent(this.student).subscribe({
       next: () => {
 
         Swal.fire({
           icon: 'success',
           title: 'Uğurlu!',
           text: 'Tələbə əlavə edildi',
           timer: 2000,
           showConfirmButton: false
         });
 
         setTimeout(() => {
           this.router.navigate(['/students']);
         }, 2000);
       },
 
       error: () => {
         Swal.fire("Xəta!", "Əlavə edilə bilmədi!", "error");
       }
     });


  }
}
