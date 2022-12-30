import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})

export class PageWrapper {
  events: string[] = [];
  opened: boolean = false;
}
