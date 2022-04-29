import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { CompraService } from './compra.service';

describe('CompraService', () => {
  let httpMock: HttpTestingController;
  let service: CompraService;
  const apiEndPointCompra = `${environment.urlApi}compras`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompraService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CompraService);
  });

  it('should be created', () => {
    const compraService: CompraService = TestBed.inject(CompraService);
    expect(compraService).toBeTruthy();
  });

  it('Debería listar las compras', () => {
    const dummyCompras = [
      {
        idMoto: 1,
        cedula: '1040048300',
        nombreCompleto: 'Andres G',
        fecha: null,
        valorTotal: 12000,
        abono: 12000,
        codigo: '2022-5',
        estado: 'C'
      },
      {
        idMoto: 2,
        cedula: '1040045424',
        nombreCompleto: 'Carolina G',
        fecha: null,
        valorTotal: 15000,
        abono: 12000,
        codigo: '2022-6',
        estado: 'I'
      }
    ];
    service.traerTodas().subscribe(compras => {
      expect(compras.length).toBe(2);
      expect(compras).toEqual(dummyCompras);
    });
    const req = httpMock.expectOne(apiEndPointCompra);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCompras);
  });
});
