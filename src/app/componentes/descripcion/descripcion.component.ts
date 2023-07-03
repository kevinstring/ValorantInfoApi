import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { async } from 'rxjs';
import { datos } from 'src/app/valorant';
import { ValorantService } from 'src/app/valorant.service';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  id:string;
  agente:datos;
  habilidad=false;
  descripcion:string;
  isSelected: boolean = false;
  constructor(private router:ActivatedRoute,private servicio:ValorantService) {
    this.router.paramMap.subscribe(a=>{this.id=a.get('id');
  })
   
  }
  ngOnInit() {
 
    this.servicio.getAgente(this.id).subscribe(data => {
      this.agente = data[1];
      console.log(this.agente.description);
    });   
    
  }
  recibirDatos(mensaje:any){
    this.agente=mensaje
  }

  toggleSelection() {
    this.isSelected = !this.isSelected;
  }
  mostrarHabilidad(nombre:string){
this.habilidad=true;
this.descripcion=nombre;
  }
  }


