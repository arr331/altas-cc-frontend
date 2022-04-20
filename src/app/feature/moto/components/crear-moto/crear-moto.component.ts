import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MotoService } from '../../shared/service/moto.service';

@Component({
  selector: 'app-crear-moto',
  templateUrl: './crear-moto.component.html',
  styleUrls: ['./crear-moto.component.scss']
})
export class CrearMotoComponent implements OnInit {
  motoFormulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoFormulario = this.formBuilder.group({
      nombreMoto: [undefined, Validators.required],
      marca: [undefined, Validators.required],
      cc: [undefined, Validators.required],
      precio: [undefined, Validators.required],
      descuento: [0, Validators.required],
      nombreImagen: ['.png', Validators.required],
      estado: ['A', Validators.required],
      cantidad: [undefined, Validators.required],      
    });
  }

  guardar(): void {
    if (this.motoFormulario.valid) {
      const motoAGuardar = this.motoService.crear(this.motoFormulario.value);
      console.log(motoAGuardar);
      this.motoService.guardar(motoAGuardar).subscribe(res => {
        console.log('guardé', res);
      });
    } else { }
  }

}
