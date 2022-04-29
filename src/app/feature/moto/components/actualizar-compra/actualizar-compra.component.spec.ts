import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(CompraService);
    motoService = TestBed.inject(MotoService);
    spyTraerPorCodigo = spyOn(compraService, 'traerPorCodigo').and.returnValue(
      of(null)
    );
    spyActualizar = spyOn(compraService, 'actualizar').and.returnValue(
      of(null)
    );
    spyOn(motoService, 'traerTodas').and.returnValue(of(null));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería estar inválido en formControl cuando se inicia', () => {
    expect(component.codigoCompra.valid).toBeFalse();
  });

  it('Debería encontrar una compra', () => {
    component.codigoCompra.setValue('2022-3');   
    component.buscar();
    expect(spyTraerPorCodigo).toHaveBeenCalledOnceWith(component.codigoCompra.value);
  });

  it('Debería actualizar una compra', () => {
    component.codigoCompra.setValue('2022-3');
    component.completarCompra();
    expect(spyActualizar).toHaveBeenCalled();
  });
});
