import { Component } from '@angular/core';

@Component({
  selector: 'app-bba',
  templateUrl: './bba.component.html',
  styleUrls: ['./bba.component.css']
})
export class BbaComponent {

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
