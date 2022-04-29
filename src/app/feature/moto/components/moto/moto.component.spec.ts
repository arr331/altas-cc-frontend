import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { ListarMotosMock } from '@shared/mocks/listar-motos.mock';
import { Offcanvas } from '@shared/utlidades/offcanvas';
import { of } from 'rxjs';
import { MotoService } from '../../shared/service/moto.service';

import { MotoComponent } from './moto.component';

describe('MotoComponent', () => {
  let component: MotoComponent;
  let fixture: ComponentFixture<MotoComponent>;
  let motoService: MotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [MotoService, HttpService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(MotoComponent);
    component = fixture.componentInstance;
    motoService = TestBed.inject(MotoService);
    spyOn(motoService, 'traerTodas').and.returnValue(of(ListarMotosMock.default));
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

  it('Debería tener la moto un valor', () => {
    spyOn(Offcanvas, 'show').and.returnValue();
    component.abrirCompra(ListarMotosMock.default[0]);
    expect(component.moto).toBeTruthy();
    expect(component.moto).toEqual(ListarMotosMock.default[0]);
    expect(Offcanvas.show).toHaveBeenCalledOnceWith('offcanvasCompra');
  });
});
