import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Datum } from 'src/app/valorant';
import { ValorantService } from 'src/app/valorant.service';

@Component({
  selector: 'app-descripcionMap',
  templateUrl: './descripcionMap.component.html',
  styleUrls: ['./descripcionMap.component.css']
})
export class DescripcionMapComponent implements OnInit {
  mapa:Datum;
  id:string;
  fondo:string=""
  constructor(private router:ActivatedRoute,private servicio:ValorantService) { 
    this.router.paramMap.subscribe(a=>{this.id=a.get('id');})
    console.log(this.mapa)
    
  this.servicio.getMapas(this.id).subscribe(a=>{this.mapa=a['data'];
  this.fondo=`background-image:url(${this.mapa.splash});background-position:center;background-size:cover;height:90vh`})
  

}

  ngOnInit() {
    // this.fondo=`background-image:url(${this.mapa.splash})`
  }

mostrar(){
  console.log(this.mapa)
}
}
