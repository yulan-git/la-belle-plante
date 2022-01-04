import { Component, OnInit } from '@angular/core';
import { PlantesService } from 'src/app/services/plantes.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public title: string;
  public lengthListProduct!: number;

  constructor(private planteService: PlantesService) {
    this.title = '🌺 La Belle Plante';
    this.planteService.listProductsSubject$.subscribe(data => {
      this.lengthListProduct = data.length;
    })
  }

  ngOnInit(): void {
  }

}
