import { Component } from '@angular/core';
import { Data } from '@angular/router';
import { DataInterface } from 'src/app/interfaces/data-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public parentMode: string = 'Crear';
  public element: DataInterface;

  constructor() { }

  setMode(currentMode: any): void {
    this.parentMode = currentMode;
  }
  
  setElement(element: DataInterface): void {
    this.element = element;
  }

}
