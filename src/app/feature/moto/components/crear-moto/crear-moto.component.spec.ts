import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { MotoService } from '../../shared/service/moto.service';

import { CrearMotoComponent } from './crear-moto.component';

describe('CrearMotoComponent', () => {
  let component: CrearMotoComponent;
  let fixture: ComponentFixture<CrearMotoComponent>;
  let motoService: MotoService;
  let spyCrear: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearMotoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [MotoService, HttpService, ManejadorError]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMotoComponent);
    component = fixture.componentInstance;
    motoService = TestBed.inject(MotoService);
    spyCrear = spyOn(motoService, 'guardar').and.returnValue(
      of(1) // void
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario inválido cuando se inicia', () => {
    expect(component.motoFormulario.valid).toBeFalsy();
  });

  it('Debería crear una moto', () => {
    const motoForm = {
      nombreMoto: 'Z 1000',
      marca: 'Kawasaki',
      cc: 999,
      precio: 12000,
      descuento: 2,
      nombreImagen: 'z1000.png',
      estado: 'A',
      cantidad: 1,
    };
    component.motoFormulario.patchValue(motoForm);
    component.guardar();
    expect(spyCrear).toHaveBeenCalled();
  });

});
