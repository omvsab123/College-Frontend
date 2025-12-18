import { Component } from '@angular/core';

@Component({
  selector: 'app-mcom',
  templateUrl: './mcom.component.html',
  styleUrls: ['./mcom.component.css']
})
export class McomComponent {

  activeSection: string = 'overview';

  setActiveSection(section: string) {
    this.activeSection = section;
  }

}
