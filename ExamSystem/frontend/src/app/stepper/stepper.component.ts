import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { Student } from '../models/student.model';
import { Exam } from '../models/exam.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements AfterViewInit {

  selectedIndex = 0;
  selected: any = null;
  steps: any[] = [];

  @ViewChild('lessonStep') lessonStep!: TemplateRef<any>;
  @ViewChild('studentStep') studentStep!: TemplateRef<any>;
  @ViewChild('examStep') examStep!: TemplateRef<any>;
  @ViewChild('finishStep') finishStep!: TemplateRef<any>;

  lessonModel: Lesson = {
    lessonCode: '',
    lessonName: '',
    classNumber: 1,
    teacherName: '',
    teacherSurname: ''
  };

  studentModel: Student = {
    studentNumber: 0,
    firstName: '',
    lastName: '',
    classNumber: 1
  };

  examModel: Exam = {
    lessonCode: '',
    lessonName: '',
    studentNumber: 0,
    studentFirstName: '',
    studentLastName: '',
    teacherFirstName: '',
    teacherLastName: '',
    examDate: '',
    grade: 0
  };

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.steps = [
        { label: 'Dərs', content: this.lessonStep },
        { label: 'Tələbə', content: this.studentStep },
        { label: 'İmtahan', content: this.examStep },
      ];

      this.selected = this.steps[0];
    });
  }

  // ⭐ Tab klik (HTML-də istifadə olunan)
  onClick(index: number) {

    // Step 0 → 1 gedir
    if (index === 1 && !this.isLessonValid()) return;

    // Step 1 → 2 gedir
    if (index === 2 && !this.isStudentValid()) return;

    // Step 2 → 3 gedir
    if (index === 3 && !this.isExamValid()) return;

    this.selectedIndex = index;
    this.selected = this.steps[index];
  }


  // ⭐ Adım keçidi
  goNext() {
    if (this.selectedIndex === 0 && !this.isLessonValid()) return;
    if (this.selectedIndex === 1 && !this.isStudentValid()) return;
    if (this.selectedIndex === 2 && !this.isExamValid()) return;

    this.selectedIndex++;
    this.selected = this.steps[this.selectedIndex];
  }


  // ⭐ Geri keçid
  goBack() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selected = this.steps[this.selectedIndex];
    }
  }
  isLessonValid(): boolean {
    return this.lessonModel.lessonCode.trim() !== '' &&
      this.lessonModel.lessonName.trim() !== '' &&
      this.lessonModel.classNumber > 0 &&
      this.lessonModel.teacherName.trim() !== '' &&
      this.lessonModel.teacherSurname.trim() !== '';
  }

  isStudentValid(): boolean {
    return this.studentModel.studentNumber > 0 &&
      this.studentModel.firstName.trim() !== '' &&
      this.studentModel.lastName.trim() !== '' &&
      this.studentModel.classNumber > 0;
  }

  isExamValid(): boolean {
    return this.examModel.lessonCode.trim() !== '' &&
      this.examModel.studentNumber > 0 &&
      this.examModel.examDate.trim() !== '' &&
      this.examModel.grade >= 0;
  }

}
