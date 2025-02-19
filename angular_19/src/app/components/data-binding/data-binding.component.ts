import { JsonPipe, LowerCasePipe, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, resource } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, JsonPipe, NgFor, LowerCasePipe],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // http = inject(HttpClient);
  // userData: any[] = [];
  // getAllUsers() {
  //   debugger;
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/users/')
  //     .subscribe((response: any) => {
  //       this.userData = response;
  //       console.log(this.userData);
  //     });
  // }

  userListResouce = resource({
    loader: () => {
      return fetch('https://jsonplaceholder.typicode.com/users/').then(
        (res) => res.json() as Promise<any[]>
      );
    },
  });

  onApiCall() {
    console.log(this.userListResouce.value());
  }
}
