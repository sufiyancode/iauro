import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  imports: [MatTableModule, MatCardModule],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: any[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'mobileNumber',
    'dateOfBirth',
    'gender',
    'address',
    'city',
    'state',
    'actions',
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(this.students));
    this.ngOnInit();
  }

  editStudent(index: number) {
    this.router.navigate(['/add-student'], {
      queryParams: { editIndex: index },
    });
  }
}
