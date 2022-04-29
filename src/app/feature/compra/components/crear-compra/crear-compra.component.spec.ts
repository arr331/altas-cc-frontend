import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { HttpService } from '@core/services/http.service';
import { ListarComprasMock } from '@shared/mocks/listar-compras.mock';
import { ListarMotosMock } from '@shared/mocks/listar-motos.mock';
import { of } from 'rxjs';
import { CompraService } from '../../shared/service/compra.service';

import { CrearCompraComponent } from './crear-compra.component';

describe('CrearCompraComponent', () => {
  let component: CrearCompraComponent;
  let fixture: ComponentFixture<CrearCompraComponent>;
  let compraService: CompraService;
  let spyCrear: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCompraComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [CompraService, HttpService, ManejadorError]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    component.moto = ListarMotosMock.default[1];
    compraService = TestBed.inject(CompraService);
    spyOn(compraService, 'traerInformacionDePago').and.returnValue(of({valor:ListarComprasMock.cotizacion}))
    spyCrear = spyOn(compraService, 'guardar').and.returnValue(
      of({ valor: '2022-7' })
    );
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario inválido cuando se inicia', () => {
    component.cotizacion = {
      moto: {
        id: 3,
        precio: 21000.0,
        cc: 999,
        marca: 'HONDA',
        estado: 'I',
        descuento: 0.0,
        nombreImagen: 'cbr.png',
        nombreMoto: 'CBR 1000RR',
        cantidad: 1
      },
      valorSinDescuento: 21000.0,
      valorFinal: 21420.0,
      impuesto: 2.0,
      descuentoLunes: 0.0,
      descuentoFinDeSemana: 0.0
    };
    component.moto = {
      id: 3,
      precio: 21000.0,
      cc: 999,
      marca: 'HONDA',
      estado: 'I',
      descuento: 0.0,
      nombreImagen: 'cbr.png',
      nombreMoto: 'CBR 1000RR',
      cantidad: 1
    }
    component.construirFormulario();
    expect(component.compraFormulario.valid).toBeFalse();
  });

  it('Debería crear una compra', () => {
    const compraForm = {
      cedula: '1040048300',
      nombreCompleto: 'Adrian R',
      abono: 12000
    };
    component.cotizacion = {
      moto: {
        id: 3,
        precio: 21000.0,
        cc: 999,
        marca: 'HONDA',
        estado: 'I',
        descuento: 0.0,
        nombreImagen: 'cbr.png',
        nombreMoto: 'CBR 1000RR',
        cantidad: 1
      },
      valorSinDescuento: 21000.0,
      valorFinal: 21420.0,
      impuesto: 2.0,
      descuentoLunes: 0.0,
      descuentoFinDeSemana: 0.0
    };
    component.construirFormulario();
    component.compraFormulario.patchValue(compraForm);
    component.guardar();
    expect(spyCrear).toHaveBeenCalled();
  });

});
