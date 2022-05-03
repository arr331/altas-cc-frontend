import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alertas } from '@core/alertas/alertas';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { Loading } from '@core/loading/loading';
import { MotoService } from '../../shared/service/moto.service';

@Component({
  selector: 'app-crear-moto',
  templateUrl: './crear-moto.component.html',
  styleUrls: ['./crear-moto.component.scss']
})
export class CrearMotoComponent implements OnInit {
  motoFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private motoService: MotoService,
    protected manejadorError: ManejadorError) { }

  ngOnInit(): void {
    this.construirFormulario();
  }

  construirFormulario(): void {
    this.motoFormulario = this.formBuilder.group({
      nombreMoto: [undefined, Validators.required],
      marca: [undefined, Validators.required],
      cc: [undefined, [Validators.required, Validators.min(350)]],
      precio: [undefined, [Validators.required, Validators.min(1000)]],
      descuento: [0, [Validators.required, Validators.min(0)]],
      nombreImagen: ['.png', Validators.required],
      estado: ['A', Validators.required],
      cantidad: [undefined, [Validators.required, Validators.min(0)]],
    });
  }

  guardar(): void {
    if (this.motoFormulario.valid) {
      const motoAGuardar = this.motoService.crear(this.motoFormulario.value);
      Loading.state.next(true);
      this.motoService.guardar(motoAGuardar).subscribe(() => {
        this.construirFormulario();
        Loading.state.next(false);
        Alertas.exito('¡Muy bien!', `Moto creada exitosamente`);
      }, error => {
        Loading.state.next(false);
        this.manejadorError.handleError(error);
        Alertas.error('Atención', `${this.manejadorError.obtenerErrorHttpCode(error.status)} - ${error.error?.mensaje || 'Por favor intena de nuevo'}`)
      });
    } else {
      Alertas.informativo('¡Atención!', 'Por favor completa bien el formulario');
    }
  }

}
