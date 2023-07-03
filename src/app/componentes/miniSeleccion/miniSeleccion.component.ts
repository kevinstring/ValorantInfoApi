import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { datos } from 'src/app/valorant';
import { ValorantService } from 'src/app/valorant.service';

@Component({
  selector: 'app-miniSeleccion',
  templateUrl: './miniSeleccion.component.html',
  styleUrls: ['./miniSeleccion.component.css']
})
export class MiniSeleccionComponent implements OnInit {
  agentes:datos[]=[]
  @Output()agente = new EventEmitter<datos[]>();

  fondo:string;
  constructor(private servicio:ValorantService) { }

  ngOnInit() {
    this.servicio.getApi('agents').subscribe(a=>{this.agentes=a;})
  console.log(this.agentes)
  }

  mandarDatos(mensaje){
    console.log("ASD")
    this.agente.emit(mensaje)
  }
}
