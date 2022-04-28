import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { Moto } from 'src/app/feature/moto/shared/modelo/moto';
import { Cotizacion } from '../../shared/modelo/cotizacion';
import { CompraService } from '../../shared/service/compra.service';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.scss']
})
export class CrearCompraComponent implements OnInit {
  @Input() moto: Moto;
  compraFormulario: FormGroup;
  cotizacion: Cotizacion;
  esIgualAlTotal: boolean = true;
  valorFinalAPagar: number;
  codigo: string;

  constructor(private formBuilder: FormBuilder, private compraService: CompraService, protected manejadorError: ManejadorError ) { }

  ngOnChanges(): void {
    if (this.moto) {
      this.traerCotizacion();
    }
    this.codigo = undefined;
  }

  ngOnInit(): void {
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
    const compraAGuardar = this.compraService.crear(this.compraFormulario.value, this.cotizacion);
    this.compraService.guardar(compraAGuardar).then(respuesta => {
      this.codigo = respuesta;
      alert(respuesta);
    }, error => {
      this.manejadorError.handleError(error);
      console.log(error.error?.mensaje);
    });
  }

  private async traerCotizacion(): Promise<void> {
    this.cotizacion = (await this.compraService.traerInformacionDePago(this.moto.id)).valor;
    this.valorFinalAPagar = this.cotizacion.valorFinal;
    this.construirFormulario();
  }

}
