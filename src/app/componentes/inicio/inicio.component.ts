import { Component, OnInit } from '@angular/core';
import { Datums } from 'src/app/competitivo';
import { ValorantService } from 'src/app/valorant.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  competitivo:Datums[];
  constructor(private servicio:ValorantService) { }

  ngOnInit() {
    this.servicio.getCompe().subscribe(a=>this.competitivo=a)
  }

}
