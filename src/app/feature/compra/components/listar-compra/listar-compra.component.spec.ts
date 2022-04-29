import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from '@core/services/http.service';
import { ListarComprasMock } from '@shared/mocks/listar-compras.mock';
import { of } from 'rxjs';
import { CompraService } from '../../shared/service/compra.service';

import { ListarCompraComponent } from './listar-compra.component';

describe('ListarCompraComponent', () => {
  let component: ListarCompraComponent;
  let fixture: ComponentFixture<ListarCompraComponent>;
  let compraService: CompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCompraComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [CompraService, HttpService]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ListarCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(CompraService);
    spyOn(compraService, 'traerTodas').and.returnValue(of(ListarComprasMock.default))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
