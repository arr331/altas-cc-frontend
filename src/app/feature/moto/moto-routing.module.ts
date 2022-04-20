import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMotoComponent } from './components/crear-moto/crear-moto.component';
import { ListarMotoComponent } from './components/listar-moto/listar-moto.component';
import { MotoComponent } from './components/moto/moto.component';

const routes: Routes = [
  {
    path: '',
    component: MotoComponent
  },
  {
    path: 'crear',
    component: CrearMotoComponent
  },
  {
    path: 'listar',
    component: ListarMotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotoRoutingModule { }
