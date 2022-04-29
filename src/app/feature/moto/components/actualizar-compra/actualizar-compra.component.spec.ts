import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { HttpService } from '@core/services/http.service';
import { ListarMotosMock } from '@shared/mocks/listar-motos.mock';
import { Modal } from '@shared/utlidades/modal';
import { of } from 'rxjs';
import { Compra } from 'src/app/feature/compra/shared/modelo/compra';
import { CompraService } from 'src/app/feature/compra/shared/service/compra.service';
import { MotoService } from '../../shared/service/moto.service';

import { ActualizarCompraComponent } from './actualizar-compra.component';

describe('ActualizarCompraComponent', () => {
  let component: ActualizarCompraComponent;
  let fixture: ComponentFixture<ActualizarCompraComponent>;
  let compraService: CompraService;
  let motoService: MotoService;
  let spyTraerPorCodigo: jasmine.Spy;
  let spyActualizar: jasmine.Spy;
  
  const compra: Compra = {
    "idMoto": 2,
    "cedula": "39189986",
    "nombreCompleto": "Beatriz Osorio",
    "fecha": new Date(),
    "valorTotal": 21000.0,
    "abono": 10500.0,
    "codigo": "2022-3",
    "estado": "I"
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarCompraComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [CompraService, HttpService, ManejadorError, MotoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(CompraService);
    motoService = TestBed.inject(MotoService);

    spyTraerPorCodigo = spyOn(compraService, 'traerPorCodigo').and.returnValue(of(compra));
    spyActualizar = spyOn(compraService, 'actualizar').and.returnValue(of(null));

    spyOn(motoService, 'traerTodas').and.returnValue(of(ListarMotosMock.default));
    spyOn(Modal, 'hide').and.returnValue();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería estar inválido en formControl cuando se inicia', () => {
    expect(component.codigoCompra.valid).toBeFalse();
  });

  it('Debería buscar por código una compra', () => {
    component.ngOnInit();
    component.codigoCompra.setValue('2022-3');   
    component.buscar();
    expect(component.compra).toEqual(compra);
    expect(component.moto).toEqual(ListarMotosMock.default[1]);
    expect(spyTraerPorCodigo).toHaveBeenCalledOnceWith(component.codigoCompra.value);
  });

  it('Debería actualizar una compra', () => {
    component.codigoCompra.setValue('2022-3');
    component.completarCompra();
    expect(spyActualizar).toHaveBeenCalled();
  });
});
