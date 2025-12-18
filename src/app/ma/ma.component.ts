import { Component } from '@angular/core';

@Component({
  selector: 'app-ma',
  templateUrl: './ma.component.html',
  styleUrls: ['./ma.component.css']
})
export class MaComponent {

  activeSection: string = 'overview';

  setActiveSection(section: string) {
    this.activeSection = section;
  }

}
