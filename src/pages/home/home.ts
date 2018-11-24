import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ToastController } from 'ionic-angular';
import { ecomData } from "../constants/constants";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WooCommerece: any;

  clothTypes = [];
  productsToBind = [];
  moreProductList = [];

  page: number;

  @ViewChild("homePageSecondarySlider") homePageSecondarySlider: Slides;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

    this.page = 2;

    for (let i = 0; i < ecomData.guidedNavigation.guidedNavEntries.length; i++) {
      this.clothTypes.push(ecomData.guidedNavigation.guidedNavEntries[i].key);
    }

    this.productsToBind = ecomData.products;
    this.loadMoreProducts(null);
  }

  ionViewDidLoad() {
    setInterval(() => {
      if (this.homePageSecondarySlider.getActiveIndex() == this.homePageSecondarySlider.length() - 1)
        this.homePageSecondarySlider.slideTo(0);
      this.homePageSecondarySlider.slideNext();
    }, 3000)
  }

  loadMoreProducts(event?: any) {

    event==null? this.page=1:this.page = this.page+1;
    
    this.moreProductList = this.moreProductList.concat(this.Paginator(this.page));// ecomData.products.slice(this.page * 10, 10);
    
    event != null ? event.complete() : null;

    if (ecomData.products.length < 10) {
      event.enable(false);
      this.toastCtrl.create({ message: "No More Products...!",duration:5000 }).present();
    }
  }

  Paginator(page) {
    var items = ecomData.products;
    page = page || 1;
    var per_page = per_page || 10;
    var offset = (page - 1) * per_page;
    return items.slice(offset).slice(0, per_page);
  }
}
