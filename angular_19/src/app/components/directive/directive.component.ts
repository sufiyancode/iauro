import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf, FormsModule, NgFor, CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css',
})
export class DirectiveComponent {
  selectedExtention: string = '';
  cityList: string[] = ['PUne', 'Mumbai', 'Delhi', 'Bangalore'];
  changeClass: string = '';
  isDivActive: boolean = false;
  studentList: any[] = [
    { name: 'Aloo', city: 'Kuch bhi', isActive: true },
    { name: 'Tomato', city: 'Kya', isActive: false },
    { name: 'Pror', city: 'Nhi hai', isActive: false },
    { name: 'Ttut', city: 'Hai ', isActive: true },
  ];
}
