import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";
import { categoryData } from "../constants/constants";

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage:any;
  categories:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
    this.categories = categoryData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
