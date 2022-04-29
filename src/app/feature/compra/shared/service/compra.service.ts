import { Injectable } from '@angular/core';
import { Respuesta } from '@core/modelo/respuesta';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compra } from '../modelo/compra';
import { Cotizacion } from '../modelo/cotizacion';

@Injectable()
export class CompraService {

  constructor(protected http: HttpService) { }

  traerTodas(): Observable<Compra[]> {
    return this.http.doGet<Compra[]>(`${environment.urlApi}compras`, this.http.optsName('consultar compras'));
  }

  traerPorCodigo(codigo: string): Promise<Compra> {
    return this.http.doGet<Compra>(`${environment.urlApi}compras/${codigo}`,
     this.http.optsName('consultar compra por código')).toPromise();
  }

  crear(compraFormulario: any, cotizacion: Cotizacion): Compra {
    return {
      ...compraFormulario,
      cotizacion
    };
  }

  guardar(compra: Compra): Promise<Respuesta<string>> {
    return this.http.doPost<Compra, Respuesta<string>>(`${environment.urlApi}/compras`, compra,
      this.http.optsName('crear/actualizar compras')).toPromise();
  }

  actualizar(codigo: string): Promise<void> {
    return this.http.doPut<void>(`${environment.urlApi}/compras/actualizar/${codigo}`,
      this.http.optsName('crear/actualizar compras')).toPromise();
  }

  traerInformacionDePago(idMoto: number): Promise<Respuesta<Cotizacion>> {
    return this.http.doGet<Respuesta<Cotizacion>>(`${environment.urlApi}compras/cotizacion/${idMoto}`,
      this.http.optsName('consultar cotización')).toPromise();
  }

}
