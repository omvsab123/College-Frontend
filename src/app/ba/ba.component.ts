import { Component } from '@angular/core';

@Component({
  selector: 'app-ba',
  templateUrl: './ba.component.html',
  styleUrls: ['./ba.component.css']
})
export class BaComponent {

  activeSection: string = 'overview';

  constructor() { }

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
