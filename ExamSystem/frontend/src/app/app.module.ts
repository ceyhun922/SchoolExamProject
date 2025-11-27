import { HttpClientModule } from '@angular/common/http';
import { SecurityComponent } from './security/security.component';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { InformationComponent } from './information/information.component';
import { ContactComponent } from './contact/contact.component';
import { FinishComponent } from './finish/finish.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { StudentsComponent } from './pages/students/students.component';
import { LessonAddComponent } from './pages/lesson-add/lesson-add.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { StudentAddComponent } from './pages/student-add/student-add.component';
import { ExamAddComponent } from './pages/exam-add/exam-add.component';
import { ExamsComponent } from './pages/exams/exams.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    InformationComponent,
    ContactComponent,
    SecurityComponent,
    FinishComponent,
    LessonsComponent,
    StudentsComponent,
    LessonAddComponent,
    StudentAddComponent,
    ExamAddComponent,
    ExamsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
