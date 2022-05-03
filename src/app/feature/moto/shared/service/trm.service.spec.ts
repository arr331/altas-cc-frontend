import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';

import { TrmService } from './trm.service';

describe('TrmService', () => {
  let httpMock: HttpTestingController;
  let service: TrmService;
  const apiEndPointTrm = 'https://www.datos.gov.co/resource/32sa-8pi3.json';
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
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TrmService, HttpService]
    });
    service = TestBed.inject(TrmService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Debería listar los datos del TRM', () => {
    service.vigenciaHoy().subscribe(trms => {
      expect(trms.length).toBe(2);
      expect(trms).toEqual(listaTRM);
    });
    const req = httpMock.expectOne(apiEndPointTrm);
    expect(req.request.method).toBe('GET');
    req.flush(listaTRM);
  });
});
