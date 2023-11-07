import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customcard',
  templateUrl: './customcard.component.html',
  styleUrls: ['./customcard.component.scss'],
})
export class CustomcardComponent  implements OnInit {

  @Input() cardDetails :any|null="";

  constructor() { }

  ngOnInit() {
    console.log(this.cardDetails)
  }

}
