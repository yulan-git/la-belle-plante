import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
//import { list_products } from 'src/app/data';
import { PlantesService } from 'src/app/services/plantes.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit, OnDestroy {
  //private data: any[] | undefined;
  private data!: any[];
  public listCategories!: string[];
  private subListProduct: Subscription;

  constructor(private plantService: PlantesService) {


    this.subListProduct = this.plantService.listProductsSubject$.subscribe(response => {
      console.log(response);
      this.data = response;
      this.listCategories = _.uniq(this.data.map(x => x.product_breadcrumb_label));
      console.log(this.listCategories);
    })

    this.plantService.getListProductsChaud();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subListProduct.unsubscribe();
  }

}
