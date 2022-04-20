import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './components/compra/compra.component';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { CompraService } from './shared/service/compra.service';
import { CrearCompraModule } from './components/crear-compra/crear-compra.module';

@NgModule({
  declarations: [
    CompraComponent,
    ListarCompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    CrearCompraModule,
  ],
  providers: [CompraService]
})
export class CompraModule { }
