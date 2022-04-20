import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCompraComponent } from './crear-compra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompraService } from '../../shared/service/compra.service';

@NgModule({
  declarations: [CrearCompraComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CrearCompraComponent],
  providers: [CompraService]
})
export class CrearCompraModule { }
