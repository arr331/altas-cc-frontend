import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Moto } from '../modelo/moto';

@Injectable()
export class MotoService {

  constructor(protected http: HttpService) { }

  traerTodas(): Observable<Moto[]> {
    return this.http.doGet<Moto[]>(`${environment.urlApi}motos`, this.http.optsName('consultar motos'));
  }

  crear(motoFormulario: any): Moto {
    return {
      ...motoFormulario
    };
  }

  guardar(moto: Moto): Observable<number> {
    return this.http.doPost<Moto, number>(`${environment.urlApi}motos`, moto,
      this.http.optsName('crear/actualizar motos'));
  }
}
