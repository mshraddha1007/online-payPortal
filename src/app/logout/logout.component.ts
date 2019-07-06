import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {

  constructor(public navctrl: NavController) { }

  ngOnInit() {}

  logout() {
    this.navctrl.navigateForward('home');
  }

}
