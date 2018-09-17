import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequirementsPage } from '../requirements/requirements';

/**
 * Generated class for the RegistersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registers',
  templateUrl: 'registers.html',
})
export class RegistersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistersPage');
  }

  GoRequirements(){

    this.navCtrl.push(RequirementsPage);
  }
}
