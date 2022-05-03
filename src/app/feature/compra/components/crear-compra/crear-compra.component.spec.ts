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
    component.moto = ListarMotosMock.default[2];
    compraService = TestBed.inject(CompraService);
    spyOn(compraService, 'traerCotizacion').and.returnValue(of({ valor: ListarComprasMock.cotizacion }));
    spyCrear = spyOn(compraService, 'guardar').and.returnValue(of({ valor: '2022-7' }));
    component.ngOnChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario inválido cuando se inicia', () => {
    expect(component.compraFormulario.valid).toBeFalse();
  });

  it('Formulario válido cuando se le agregue información', () => {
    component.compraFormulario.patchValue({ cedula: '1040048300', nombreCompleto: 'Adrian R', abono: 12000 });
    expect(component.compraFormulario.valid).toBeTrue();
  });

  it('Debería crear una compra', () => {
    component.compraFormulario.patchValue({ cedula: '1040048300', nombreCompleto: 'Adrian R', abono: 12000 });
    component.guardar();
    expect(spyCrear).toHaveBeenCalled();
  });

  it('Debería traer una cotización', () => {
    expect(component.cotizacion).toEqual(ListarComprasMock.cotizacion);
  });

});
