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

  guardar(moto: Moto): Observable<boolean> {
    return this.http.doPost<Moto, boolean>(`${environment.urlApi}/motos`, moto,
      this.http.optsName('crear/actualizar motos'));
  }

  // eliminar(producto: Producto) {
  //   return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
  //                                                this.http.optsName('eliminar productos'));
  // }
}
