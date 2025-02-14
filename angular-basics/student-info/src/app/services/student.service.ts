import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {
      firstName: 'Sufiyan',
      lastName: 'N',
      email: 'sufiyanlaptop@gmail.com',
      mobileNumber: '9292929292',
      city: 'Pune',
      state: 'Maharashtra',
      gender: 'Male',
      guardianName: 'Not',
      dateOfBirth: '1998-12-01',
      address: 'lskdfj',
    },
  ];

  getStudents() {
    return this.students;
  }

  addStudent(student: any) {
    this.students.push(student);
  }

  deleteStudent(index: number) {
    this.students.splice(index, 1);
  }
}
