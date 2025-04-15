import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router'; // Importing ActivatedRoute
import { CourseService } from 'app/services/course.service';
import { Course } from 'app/models/course';

@Component({
  standalone: true, 
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.scss'],
  imports: [CommonModule] 
})
export class StudentCoursesComponent implements OnInit {
  @Input() studentId!: number;
  student = { id: 1, name: 'John Doe' };
  courses: Course[] = [];

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {} // Inject ActivatedRoute

  ngOnInit(): void {
    if (!this.studentId) {
      this.studentId = Number(this.activatedRoute.snapshot.paramMap.get('id')); // Get student ID from route
    }

    if (this.studentId) {
      this.getStudentCourses();
    } else {
      console.warn('No studentId found.');
    }
  }

  getStudentCourses(): void {
    this.courseService.getCoursesByStudent(this.studentId).subscribe(
      (data) => this.courses = data,
      (error) => console.error('Error fetching courses', error)
    );
  }
}
