import { Component, OnInit } from '@angular/core';
import { list_products } from 'src/app/data';
import * as _ from 'underscore';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  private data: any[];
  public listCategories: string[];

  constructor() {
    this.data = list_products;
    this.listCategories = _.uniq(this.data.map(x => x.product_breadcrumb_label));
    console.log(this.listCategories);
  }

  ngOnInit(): void {
  }

}
