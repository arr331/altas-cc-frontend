import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCompraComponent } from './crear-compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompraService } from '../../shared/service/compra.service';
import { ManejadorError } from '@core/interceptor/manejador-error';

@NgModule({
  declarations: [CrearCompraComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CrearCompraComponent],
  providers: [CompraService, ManejadorError]
})
export class CrearCompraModule { }
