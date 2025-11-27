import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { StudentsComponent } from './pages/students/students.component';
import { LessonAddComponent } from './pages/lesson-add/lesson-add.component';
import { StudentAddComponent } from './pages/student-add/student-add.component';
import { ExamAddComponent } from './pages/exam-add/exam-add.component';
import { ExamsComponent } from './pages/exams/exams.component';

const routes: Routes = [
  { path: '', component: StepperComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'students', component: StudentsComponent},
  {path:'exams',component: ExamsComponent},
  { path: 'lesson/add', component: LessonAddComponent},
  { path: 'student/add', component: StudentAddComponent},
  { path: 'exam/add', component: ExamAddComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
