import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { DescripcionComponent } from './componentes/descripcion/descripcion.component';
import { LoginComponent } from './componentes/login/login.component';
import { MapComponent } from './componentes/maps/map.component';
import { DescripcionMapComponent } from './componentes/descripcionMap/descripcionMap.component';

const routes: Routes = [{
path:'',component:InicioComponent
},
{path:'categorias', component:CategoriaComponent},
{
path:'categorias/:id', component:DescripcionComponent
},
{
  path:'car/:id', component:DescripcionMapComponent
},
{
path:'login',component:LoginComponent

},
{path:'car',component:MapComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
