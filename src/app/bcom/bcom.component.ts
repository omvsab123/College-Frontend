import { Component } from '@angular/core';

@Component({
  selector: 'app-bcom',
  templateUrl: './bcom.component.html',
  styleUrls: ['./bcom.component.css']
})
export class BcomComponent {

  activeSection: string = 'overview';

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
