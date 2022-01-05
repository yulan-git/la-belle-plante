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
  public data!: any[];
  public listCategories!: string[];
  private subListProduct: Subscription;

  constructor(private plantService: PlantesService) {

    this.subListProduct = this.plantService.listProductsSubject$.subscribe(response => {
      console.log(response);
      this.listCategories = _.uniq(response.map(x => x.product_breadcrumb_label));
      response.length = 40;
      this.data = [...response];
      console.log(this.listCategories);
    })

  }
  
  ngOnInit(): void {
    this.plantService.getListProductsChaud();
  }

  onGetAllProducts() {
    
  }

  ngOnDestroy(): void {
    this.subListProduct.unsubscribe();
  }

}
