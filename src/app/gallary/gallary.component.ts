import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent {


 selectedImage: string | null = null;
// ../../assets/b.sc microbiology/swati.jpg
  galleryImages = [
    { path: 'assets/cantin.png', title: 'Canteen' },
    { path: 'assets/chemicallab.png', title: 'Chemistry Lab' },
    { path: 'assets/comlab.png', title: 'Computer Lab' },
    { path: 'assets/gym.png', title: 'College Gym' },
    { path: 'assets/lab.png', title: 'Microbiology Lab' },
    { path: 'assets/playground.png', title: 'Playground' },
    { path: 'assets/studylab.png', title: 'Study Lab' },

 { path: '../../assets/gallary/g9.jpg', title: 'Canteen' },
    { path: '../../assets/gallary/g10.jpg', title: 'Chemistry Lab' },
    { path: '../../assets/gallary/g11.jpg', title: 'Computer Lab' },
    { path: '../../assets/gallary/g15.jpg', title: 'College Gym' },
    { path: '../../assets/gallary/g17.jpg', title: 'Microbiology Lab' },
    { path: '../../assets/gallary/g19.jpg', title: 'Playground' },
    { path: '../../assets/gallary/g20.jpg', title: 'Study Lab' },
 { path: '../../assets/gallary/g21.jpg', title: 'Study Lab' } 
 ];

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }

}
