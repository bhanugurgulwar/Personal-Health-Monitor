import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation:ViewEncapsulation.None
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
