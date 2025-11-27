export interface Exam {
  id?: number;
  lessonCode: string;
  lessonName: string;
  studentNumber: number;
  studentFirstName: string;
  studentLastName: string;
  teacherFirstName: string;
  teacherLastName: string;
  examDate: string;
  grade: number;
}