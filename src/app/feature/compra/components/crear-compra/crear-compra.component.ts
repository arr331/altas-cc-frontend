import { Component, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alertas } from '@core/alertas/alertas';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { Loading } from '@core/loading/loading';
import { Moto } from 'src/app/feature/moto/shared/modelo/moto';
import { Cotizacion } from '../../shared/modelo/cotizacion';
import { CompraService } from '../../shared/service/compra.service';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.scss']
})
export class CrearCompraComponent implements OnChanges {
  @Input() moto: Moto;
  compraFormulario: FormGroup;
  cotizacion: Cotizacion;
  esIgualAlTotal: boolean;
  valorFinalAPagar: number;

  constructor(private formBuilder: FormBuilder, private compraService: CompraService, protected manejadorError: ManejadorError) { }

  ngOnChanges(): void {
    if (this.moto) {
      this.traerCotizacion();
      this.esIgualAlTotal = true
    }
  }

  construirFormulario(): void {
    this.compraFormulario = this.formBuilder.group({
      cedula: [undefined, Validators.required],
      nombreCompleto: [undefined, Validators.required],
      abono: [this.cotizacion.valorFinal, Validators.required],
    });
    this.compraFormulario.get('abono').valueChanges.subscribe((abono: number) => {
      this.esIgualAlTotal = abono == this.cotizacion.valorFinal;
      this.valorFinalAPagar = this.esIgualAlTotal ? this.cotizacion.valorFinal : this.moto.precio;
    });
  }

  guardar(): void {
    if (this.compraFormulario.valid) {
      Loading.state.next(true);
      const compraAGuardar = this.compraService.crear(this.compraFormulario.value, this.cotizacion);
      this.compraService.guardar(compraAGuardar).subscribe(respuesta => {
        Loading.state.next(false);
        Alertas.exito('¡Felicitaciones!', `Disfruta tu nueva moto. El código de la moto es: ${respuesta.valor}`);
      }, error => {
        Loading.state.next(false);
        this.manejadorError.handleError(error);
        Alertas.error('Atención', `${this.manejadorError.obtenerErrorHttpCode(error.status)} - ${error.error?.mensaje || 'Por favor intena de nuevo'}`)
      });
    } else {
      Alertas.informativo('¡Atención!', 'Por favor completa bien el formulario');
    }
  }

  private traerCotizacion(): void {
    this.compraService.traerCotizacion(this.moto.id).subscribe(respuesta => {
      this.cotizacion = respuesta.valor;
      this.valorFinalAPagar = this.cotizacion.valorFinal;
      this.construirFormulario();
    }, error => {
      Loading.state.next(false);
      this.manejadorError.handleError(error);
      Alertas.error('Atención', `${this.manejadorError.obtenerErrorHttpCode(error.status)} - ${error.error?.mensaje || 'Por favor intena de nuevo'}`)
    });
  }

}
