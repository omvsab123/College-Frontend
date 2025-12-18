import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-compscience',
  templateUrl: './compscience.component.html',
  styleUrls: ['./compscience.component.css']
})
export class CompscienceComponent {

  activeSection: string = 'overview';

  showModal = false;

  profile = {
    img: '',
    name: '',
    designation: '',
    qualification: '',
    experience: '',
    expertise: '',
    mobile:'',
    email:''
  };

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  openProfile(img: string, name: string, designation: string,
              qualification: string, experience: string, expertise: string, mobile: string, email: string) {

    this.profile = {
      img,
      name,
      designation,
      qualification,
      experience,
      expertise,
      mobile,
      email
    };

    this.showModal = true;
  }

  closeProfile() {
    this.showModal = false;
  }
}
