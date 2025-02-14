import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptgroup } from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-student',
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
  ],

  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent implements OnInit {
  student = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
  };

  students: any[] = [];
  editIndex: number | null = null;

  // Predefined city & state data for autocomplete
  states: string[] = [
    'Maharashtra',
    'Delhi',
    'Karnataka',
    'Tamil Nadu',
    'Uttar Pradesh',
  ];
  cities: { [key: string]: string[] } = {
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    Delhi: ['New Delhi'],
    Karnataka: ['Bangalore', 'Mysore'],
    'Tamil Nadu': ['Chennai', 'Coimbatore'],
    'Uttar Pradesh': ['Lucknow', 'Kanpur'],
  };

  constructor(private router: Router, private route: ActivatedRoute) {}

  onStateChange() {
    console.log('Selected State:', this.student.state);
    console.log('Available Cities:', this.cities[this.student.state]);
  }
  ngOnInit() {
    const storedStudents = localStorage.getItem('students');
    this.students = storedStudents ? JSON.parse(storedStudents) : [];

    this.route.queryParams.subscribe((params) => {
      if (params['editIndex'] !== undefined) {
        this.editIndex = Number(params['editIndex']);
        this.student = { ...this.students[this.editIndex] };
      }
    });
  }

  onSubmit() {
    if (this.editIndex !== null) {
      this.students[this.editIndex] = this.student;
    } else {
      this.students.push(this.student);
    }

    localStorage.setItem('students', JSON.stringify(this.students));
    this.router.navigate(['/students']);
  }
}
