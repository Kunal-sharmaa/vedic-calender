import { Component, Input, OnInit } from '@angular/core';
//<p *ngFor="let val of additionalValues;let i=index;" *ngIf="i==id">
//<div *ngFor="let val of additionalValues">{{val}}</div>
@Component({
  selector: 'app-square',
  template: `
    <div class="parent">{{value}}</div>
      
    
  `,
  styles: [
    '.parent { color:#E9F1F7; width: 100%; height: 100%; font-size: 3em ; background: #54426B;display: flex ; flex-direction: row; justify-content: center; align-items: center;}'
    ]
})
export class SquareComponent implements OnInit {

  @Input() value! :string | null;// 1st values

  
  ngOnInit(): void {
    console.log("child");
  }
  
}
//value for value will come from parent component.This component is a child component.
