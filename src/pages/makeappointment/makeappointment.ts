import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the MakeappointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-makeappointment',
  templateUrl: 'makeappointment.html',
})
export class MakeappointmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeappointmentPage');
  }

  public event = {
    month: '2018-02-19',
    timeStarts: '07:43',
    timeEnds: '07:43',
}

 openPage(){

    this.navCtrl.push(MenuPage);
 }
}
