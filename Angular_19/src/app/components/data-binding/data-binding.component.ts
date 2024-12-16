import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = 'Siraj';
  rollNo: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = 'Enter full name';
  div1ClassName: string = "bg-primary";

  constructor() {
    console.log(this.firstName)

    this.isActive = false
    console.log(this.isActive)
  }

}
