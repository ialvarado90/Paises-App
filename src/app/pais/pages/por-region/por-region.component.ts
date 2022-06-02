import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right:5px;
    }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  getClassCss(region: string): string {
    return (region === this.regionActiva) ? "btn btn-primary" : "btn btn-outline-primary";
  }

  activarRegion(region: string) {
    if (this.regionActiva === region) { return; }
    this.regionActiva = region;
    this.paises = [];

    //TODO: hacer el llamado al servicio
    this.paisService.buscarRegion(region).subscribe({
      next: (paises) => {
        this.paises = paises;
      }
    });
  }



}
