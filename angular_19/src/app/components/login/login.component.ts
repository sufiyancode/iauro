import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userForm: UserLogin = new UserLogin();
  router = inject(Router);

  onLogin() {
    if (
      this.userForm.username == 'admin' &&
      this.userForm.password == '112233'
    ) {
      this.router.navigateByUrl('/directive');
      localStorage.setItem('user', this.userForm.username);
    } else {
      alert('User or password is wrong ');
    }
  }
}

export class UserLogin {
  username: string;
  password: string;

  constructor() {
    (this.username = ''), (this.password = '');
  }
}
