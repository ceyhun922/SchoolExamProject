import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "../models/student.model";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
})

export class StudentService {
    private apiUrl = "http://localhost:5221/api/Student";

    constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

    addStudent(student: Student): Observable<any> {
        return this.http.post(`${this.apiUrl}/Create`, student);
    }
}