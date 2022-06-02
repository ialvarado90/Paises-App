import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) {

  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe({
        next: paises => {
          this.paises = paises;
        },
        error: (error) => {
          this.hayError = true;
          this.paises = [];
        }
      });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    //TODO: crear sugerencias
    this.paisService.buscarPais(termino).subscribe({
      next: paises => {
        this.paisesSugeridos = paises.splice(0, 5);
      }, error: error => this.paisesSugeridos = []
    })
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
    this.mostrarSugerencia = false;
  }

}
