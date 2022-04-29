import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Respuesta } from '@core/modelo/respuesta';
import { HttpService } from '@core/services/http.service';
import { ListarComprasMock } from '@shared/mocks/listar-compras.mock';
import { environment } from 'src/environments/environment';
import { CompraService } from './compra.service';

describe('CompraService', () => {
  let httpMock: HttpTestingController;
  let service: CompraService;
  const apiEndPointCompra = `${environment.urlApi}compras`;
  const codigo = '2022-1';

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
    service.traerTodas().subscribe(compras => {
      expect(compras.length).toBe(3);
      expect(compras).toEqual(ListarComprasMock.default);
    });
    const req = httpMock.expectOne(apiEndPointCompra);
    expect(req.request.method).toBe('GET');
    req.flush(ListarComprasMock.default);
  });

  it('Debería traer compra por código', () => {
    service.traerPorCodigo(codigo).subscribe(compra => {
      expect(compra).toEqual(ListarComprasMock.default[0]);
      expect(compra.idMoto).toBe(ListarComprasMock.default[0].idMoto);
    });
    const req = httpMock.expectOne(`${apiEndPointCompra}/${codigo}`);
    expect(req.request.method).toBe('GET');
    req.flush(ListarComprasMock.default[0]);
  });

  it('Debería crear un objeto compra', () => {
    const form = { cedula: '1040048300', nombreCompleto: 'Adrian R', abono: 12000 };
    const compra = service.crear(form, ListarComprasMock.cotizacion);
    expect(compra).toBeTruthy();
    expect(compra.cotizacion.valorFinal).toEqual(ListarComprasMock.cotizacion.valorFinal);
  });

  it('Debería guardar una compra', () => {
    service.guardar(ListarComprasMock.default[0]).subscribe(respuesta => {
      expect(respuesta.valor).toBeTruthy();
      expect(respuesta).toEqual({ valor: codigo });
    });
    const req = httpMock.expectOne(apiEndPointCompra);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<Respuesta<string>>({ body: { valor: codigo } }));
  });

  it('Debería actualizar una compra', () => {
    service.actualizar(codigo).subscribe();
    const req = httpMock.expectOne(`${apiEndPointCompra}/actualizar/${codigo}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<Respuesta<string>>({ body: { valor: '2022-1' } }));
  });

  it('Debería traer una cotizacion', () => {
    service.traerCotizacion(1).subscribe(respuesta => {
      expect(respuesta).toBeTruthy();
      expect(respuesta).toEqual({ valor: ListarComprasMock.cotizacion });
    });
    const req = httpMock.expectOne(`${apiEndPointCompra}/cotizacion/${1}`);
    expect(req.request.method).toBe('GET');
    req.flush({ valor: ListarComprasMock.cotizacion });
  });
});
