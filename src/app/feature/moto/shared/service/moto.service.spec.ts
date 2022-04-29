import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { ListarMotosMock } from '@shared/mocks/listar-motos.mock';
import { environment } from 'src/environments/environment';

import { MotoService } from './moto.service';

describe('MotoService', () => {
  let httpMock: HttpTestingController;
  let service: MotoService;
  const apiEndPointMotos = `${environment.urlApi}motos`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [MotoService, HttpService]
    });
    service = TestBed.inject(MotoService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería listar las motos', () => {
    service.traerTodas().subscribe(compras => {
      expect(compras.length).toBe(3);
      expect(compras).toEqual(ListarMotosMock.default);
    });
    const req = httpMock.expectOne(apiEndPointMotos);
    expect(req.request.method).toBe('GET');
    req.flush(ListarMotosMock.default);
  });
});
