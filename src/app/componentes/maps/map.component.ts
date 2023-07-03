import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/valorant';
import { ValorantService } from 'src/app/valorant.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
mapas:Datum[]=[]
  constructor(private servicio:ValorantService) { }

  ngOnInit() {
    this.servicio.getMaps().subscribe(a=>this.mapas=a.data)
  }
  ngOnDestroy(): void {
    console.log("destrido")
  }

}
