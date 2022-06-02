import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent {
  @Input() paises: Country[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
