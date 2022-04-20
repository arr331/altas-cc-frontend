import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';

const routes: Routes = [
  {
    path: '',
    component: ListarCompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
