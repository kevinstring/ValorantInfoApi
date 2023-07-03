import { Component, OnInit } from '@angular/core';
import { datos } from 'src/app/valorant';
import { ValorantService } from 'src/app/valorant.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  agentes:datos[]=[]
  fondo:string;
  constructor(private servicio:ValorantService) { }

  ngOnInit() {
    this.servicio.getApi('agents').subscribe(a=>{this.agentes=a;})
  console.log(this.agentes)
  }

}
