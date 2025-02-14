import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visible: boolean= false;
  showDiv(event:any){
    
    if(event === false){

      this.isDiv1Visible = false
    }else{
      this.isDiv1Visible=true;
    }

  }

  dayName: string ="";
  div2Visible : string = "No";

  cityList: string[] = ["Pune", 'Mumbai', 'Jalna', 'Jaipur']

}
