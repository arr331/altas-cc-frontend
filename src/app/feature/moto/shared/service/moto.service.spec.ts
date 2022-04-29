import { HttpResponse } from '@angular/common/http';
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

  it('Debería crear un objeto moto', () => {
    const form = {
      precio: 20000.0, cc: 999, marca: 'KAWASAKI', estado: 'A',
      descuento: 4.0, nombreImagen: 'Z1000.png', nombreMoto: 'z 1000', cantidad: 3
    };
    const moto = service.crear(form);
    expect(moto).toBeTruthy();
    expect(moto.cc).toEqual(form.cc);
  });

  it('Debería guardar una moto', () => {
    service.guardar(ListarMotosMock.default[0]).subscribe(respuesta => {
      expect(respuesta).toBeTruthy();
      expect(respuesta).toEqual(1);
    });
    const req = httpMock.expectOne(apiEndPointMotos);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<number>({ body: 1 }));
  });
});
