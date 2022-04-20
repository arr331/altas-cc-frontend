import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Moto } from 'src/app/feature/moto/shared/modelo/moto';
import { InformacionCompra } from '../../shared/modelo/informacion-compra';
import { CompraService } from '../../shared/service/compra.service';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.scss']
})
export class CrearCompraComponent implements OnInit {
  @Input() moto: Moto;
  compraFormulario: FormGroup;
  informacionPago: InformacionCompra;
  esIgualAlTotal: boolean;
  valorFinalAPagar: number;

  constructor(private formBuilder: FormBuilder, private compraService: CompraService) { }

  ngOnChanges(): void {
    console.log(this.moto);
    if (this.moto) {
      this.traerInformacionDePago();
    }
  }

  ngOnInit(): void {
  }

  construirFormulario(): void {
    this.compraFormulario = this.formBuilder.group({
      cedula: [undefined, Validators.required],
      nombreCompleto: [undefined, Validators.required],
      abono: [this.informacionPago.valorFinal, Validators.required],
    });
    this.compraFormulario.get('abono').valueChanges.subscribe((abono: number) => {
      this.esIgualAlTotal = abono == this.informacionPago.valorFinal;
      this.valorFinalAPagar = this.esIgualAlTotal ? this.informacionPago.valorFinal : this.moto.precio;
    });
  }

  guardar(): void {
    const compraAGuardar = this.compraService.crear(this.compraFormulario.value);
    this.compraService.guardar(compraAGuardar);
  }

  private async traerInformacionDePago(): Promise<void> {
    // this.informacionPago = await this.compraService.traerInformacionDePago(this.moto.id);
    this.informacionPago = { descuentoTotal: 11, valorFinal: 21050 };
    this.valorFinalAPagar = this.informacionPago.valorFinal;
    this.construirFormulario();
  }

}
