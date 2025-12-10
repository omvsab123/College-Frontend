import { Component } from '@angular/core';

@Component({
  selector: 'app-abcid',
  templateUrl: './abcid.component.html',
  styleUrls: ['./abcid.component.css']
})
export class AbcidComponent  {

   openABCWebsite() {
    window.open("https://www.abc.gov.in", "_blank");
  }
}
