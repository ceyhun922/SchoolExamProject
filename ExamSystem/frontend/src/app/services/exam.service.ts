import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Exam } from "../models/exam.model";
import { Lesson } from "../models/lesson.model";
import { ExamCreate } from "../models/exam.create.model";

@Injectable({
    providedIn:'root'
})

export class ExamService {
    
    private apiUrl ='http://localhost:5221/api/Exam'

    constructor(private http: HttpClient) {}



    getExams(): Observable<Exam[]> {
        return this.http.get<Exam[]>(this.apiUrl);
  }
   addExam(exam: ExamCreate): Observable<any> {
    return this.http.post(`${this.apiUrl}/Create`, exam);
  }
}