import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotoRoutingModule } from './moto-routing.module';
import { MotoComponent } from './components/moto/moto.component';
import { SharedModule } from '@shared/shared.module';
import { MotoService } from './shared/service/moto.service';
import { CrearMotoComponent } from './components/crear-moto/crear-moto.component';
import { ListarMotoComponent } from './components/listar-moto/listar-moto.component';
import { CrearCompraModule } from '../compra/components/crear-compra/crear-compra.module';


@NgModule({
  declarations: [
    MotoComponent,
    CrearMotoComponent,
    ListarMotoComponent
  ],
  imports: [
    CommonModule,
    MotoRoutingModule,
    SharedModule,
    CrearCompraModule
  ],
  providers: [MotoService]
})
export class MotoModule { }
