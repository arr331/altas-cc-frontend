import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { ListarMotosMock } from '@shared/mocks/listar-motos.mock';
import { of } from 'rxjs';
import { MotoService } from '../../shared/service/moto.service';

import { ListarMotoComponent } from './listar-moto.component';

describe('ListarMotoComponent', () => {
  let component: ListarMotoComponent;
  let fixture: ComponentFixture<ListarMotoComponent>;
  let motoService: MotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMotoComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [MotoService, HttpService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ListarMotoComponent);
    component = fixture.componentInstance;
    motoService = TestBed.inject(MotoService);
    spyOn(motoService, 'traerTodas').and.returnValue(of(ListarMotosMock.default));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
