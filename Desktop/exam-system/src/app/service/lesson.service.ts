import { Injectable, signal } from '@angular/core';
import { Lesson } from '../models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  lessons = signal<Lesson[]>([]);

  addLesson(lesson: Lesson) {
    this.lessons.update(ls => [...ls, lesson]);
  }
}
