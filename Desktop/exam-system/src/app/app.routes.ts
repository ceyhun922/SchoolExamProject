import { Routes } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { LessonComponent } from './pages/lesson/lesson.component';
import { ExamComponent } from './pages/exam/exam.component';
import { ResultsComponent } from './pages/results/results.component';


export const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
{ path: 'student', component: StudentComponent },
{ path: 'lesson', component: LessonComponent },
{ path: 'exam', component: ExamComponent },
{ path: 'results', component: ResultsComponent }

];


