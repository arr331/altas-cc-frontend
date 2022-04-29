import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { ListarCompraComponent } from './components/listar-compra/listar-compra.component';
import { CompraService } from './shared/service/compra.service';
import { CrearCompraModule } from './components/crear-compra/crear-compra.module';
import { HttpService } from '@core/services/http.service';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { HttpClient } from '@angular/common/http';
import { MotoService } from '../moto/shared/service/moto.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ListarCompraComponent
  ],
  imports: [
    CommonModule,
    CompraRoutingModule,
    SharedModule,
    CrearCompraModule,
    ReactiveFormsModule
  ],
  providers: [MotoService, CompraService, ManejadorError, HttpClient, HttpService]
})
export class CompraModule { }
