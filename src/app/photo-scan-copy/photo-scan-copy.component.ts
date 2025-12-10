import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-scan-copy',
  templateUrl: './photo-scan-copy.component.html',
  styleUrls: ['./photo-scan-copy.component.css']
})
export class PhotoScanCopyComponent {

    openSPPUPortal() {
    window.open("https://pun.unipune.ac.in/reval/", "_blank");
  }

}
