import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CLIENTESComponent } from './Components/menu/clientes/clientes.component';
import { VEHICULOSComponent } from './Components/menu/vehiculos/vehiculos.component';
import { MECANICOSComponent } from './Components/menu/mecanicos/mecanicos.component';

const routes: Routes = [
  {path:"Clientes", component:CLIENTESComponent},
  {path:"Vehiculos", component:VEHICULOSComponent},
  {path:"Mecanicos", component:MECANICOSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
