import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum, Root, Welcome, datos } from './valorant';
import { Datums, Welcom} from './competitivo';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValorantService {

constructor(private http:HttpClient) { }
 url ="https://valorant-api.com/v1/"


 getApi(agente:string){

  return this.http.get<Root>(`${this.url}${agente}/?isPlayableCharacter=true&language=es-ES`).pipe(map(
    a=>{
    const agents:datos[]=[];
      for(let i of a.data ){
        agents.push(i)
      }
      return agents
  }))
 }

 getAgente(id:string){
      return this.http.get<Root>(`${this.url}agents/${id}/?language=es-ES`).pipe(map(
        a=>{
        const agents:datos[]=[];
        for(let i in a){
            agents.push(a[i])
          }
        return agents
      }
        ))
 }


 getMaps(){
  return this.http.get<Welcome>(`${this.url}maps/?language=es-ES`)
 }

 getMapas(nombre:string){
    return this.http.get<Datum  >(`${this.url}maps/${nombre}`)
 }

 getCompe(){
  return this.http.get<Welcom>(`${this.url}competitivetiers`).pipe(map(
    a=>{
      let compes:Datums[]=[];
      for(let i in a){
        console.log(a[i])
        compes=a[i]
      }
      return compes   }
  ))
 }
}
