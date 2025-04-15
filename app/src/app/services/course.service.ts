import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '@models/course'; 

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCoursesByStudent(studentId: number): Observable<Course[]> {
    
    const mockCourses: Course[] = [
      { courseId: 1, courseTitle: "Advanced ASP.NET Core", totalHours: 40 },
      { courseId: 2, courseTitle: "Basic Entity Framework Core", totalHours: 30 },
      { courseId: 3, courseTitle: "Web Development with C#", totalHours: 45 }
    ];

   
    return of(mockCourses);
  }
}
