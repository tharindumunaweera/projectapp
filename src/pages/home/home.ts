import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistersPage } from '../registers/registers';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


      @ViewChild('username') uname;
      @ViewChild('password') password;

  constructor(public navCtrl: NavController) {

  }

  SignIn(){
     this.navCtrl.push(LoginPage);

  }

  RegisterIn(){
    this.navCtrl.push(RegistersPage);
  }

}
