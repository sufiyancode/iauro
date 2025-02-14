import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName : string = "Angular full course";
  courseDuration: number = 2;
  nameMinLength: number = 4;
  myInputtype: string = 'date'

  showAlert(){
      alert("welcome to the course");
  }
  onStateChange(event: any){
    
    alert(event.target?.value)
  }

  onMouseEnter(){
    console.log("on one wya");
    
  }
}
