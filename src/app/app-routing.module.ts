import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { RegistroComponent } from './components/views/registro/registro.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
  path:'registros',
  component:RegistroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
