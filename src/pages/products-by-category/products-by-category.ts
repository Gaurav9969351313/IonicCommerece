import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { categorywiseProducts } from "../constants/constants";

@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategoryPage {

  products:any[];
  page:number = 1;
  category:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.page = 1;
    this.category = this.navParams.get("category");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategoryPage');
  }

  loadProducts(category:string) {
    return categorywiseProducts[category].products;
  }

}
