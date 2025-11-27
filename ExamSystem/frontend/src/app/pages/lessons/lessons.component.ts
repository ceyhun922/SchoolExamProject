import { Component, OnInit } from '@angular/core';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from 'src/app/models/lesson.model';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor(private lessonService: LessonService) {}

  ngOnInit(): void {
    this.loadLessons();
  }

  loadLessons() {
    this.lessonService.getLessons().subscribe(
      res => {
        this.lessons = res;
        console.log("Dərs listi:", this.lessons);
      },
      err => {
        console.error("Dərs listi çəkilə bilmədi", err);
      }
    );
  }
}
