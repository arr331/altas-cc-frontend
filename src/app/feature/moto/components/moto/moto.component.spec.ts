import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { ListarMotosMock } from '@shared/mocks/listar-motos.mock';
import { Offcanvas } from '@shared/utlidades/offcanvas.util';
import { of } from 'rxjs';
import { MotoService } from '../../shared/service/moto.service';
import { TrmService } from '../../shared/service/trm.service';

import { MotoComponent } from './moto.component';

describe('MotoComponent', () => {
  let component: MotoComponent;
  let fixture: ComponentFixture<MotoComponent>;
  let motoService: MotoService;
  let trmService: TrmService;
  const listaTRM = [{
    valor: '2850.98',
    unidad: 'COP',
    vigenciadesde: '2002-10-09T00:00:00.000',
    vigenciahasta: '2002-10-09T00:00:00.000'
  },
  {
    valor: '2854.04',
    unidad: 'COP',
    vigenciadesde: '2002-10-10T00:00:00.000',
    vigenciahasta: '2002-10-10T00:00:00.000'
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [MotoService, HttpService, TrmService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MotoComponent);
    component = fixture.componentInstance;
    motoService = TestBed.inject(MotoService);
    trmService = TestBed.inject(TrmService);
    spyOn(motoService, 'traerTodas').and.returnValue(of(ListarMotosMock.default));
    spyOn(trmService, 'vigenciaHoy').and.returnValue(of(listaTRM));
    component.ngOnInit();    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería traer listado de motos', () => {
    expect(component.listaMotos).toBeTruthy();
    expect(component.listaMotos.length).toEqual(3);
  });

  it('Debería traer listado de TRM', () => {
    expect(component.trmData).toBeTruthy();
  });

  it('Debería tener la moto un valor', () => {
    spyOn(Offcanvas, 'show').and.returnValue();
    component.abrirCompra(ListarMotosMock.default[0]);
    expect(component.moto).toBeTruthy();
    expect(component.moto).toEqual(ListarMotosMock.default[0]);
    expect(Offcanvas.show).toHaveBeenCalledOnceWith('offcanvasCompra');
  });
});
