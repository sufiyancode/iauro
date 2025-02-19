import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp-form',
  imports: [FormsModule],
  templateUrl: './temp-form.component.html',
  styleUrl: './temp-form.component.css',
})
export class TempFormComponent {
  userForm: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isActive: false,
  };
  onSubmit() {
    const formData = this.userForm;
    console.log(formData);

    debugger;
  }
}
