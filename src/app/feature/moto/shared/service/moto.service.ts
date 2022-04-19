import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Moto } from '../modelo/moto';

@Injectable()
export class MotoService {

  constructor(protected http: HttpService) { }

  traerTodas() {
    return this.http.doGet<Moto[]>(`${environment.urlApi}motos`, this.http.optsName('consultar motos'));
  }

  // guardar(producto: Producto) {
  //   return this.http.doPost<Producto, boolean>(`${environment.endpoint}/productos`, producto,
  //                                               this.http.optsName('crear/actualizar productos'));
  // }

  // eliminar(producto: Producto) {
  //   return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${producto.id}`,
  //                                                this.http.optsName('eliminar productos'));
  // }
}
