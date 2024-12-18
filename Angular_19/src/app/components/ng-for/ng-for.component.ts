import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["Colombo", "Kandy", "Wattala", "Gampaha", "Galle"];

  employeeArray: any[] = [
    {empId: 121, name: 'AAA', city: 'Colombo', contactNo: '00000000'},
    {empId: 122, name: 'BBB', city: 'Kandy', contactNo: '11111111'},
    {empId: 123, name: 'CCC', city: 'Galle', contactNo: '22222222'},
    {empId: 124, name: 'DDD', city: 'Matara', contactNo: '33333333'},
    {empId: 125, name: 'EEE', city: 'Gampaha', contactNo: '44444444'},
  ]
}
