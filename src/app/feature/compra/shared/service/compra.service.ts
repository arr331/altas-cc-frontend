import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compra } from '../modelo/compra';
import { Cotizacion } from '../modelo/cotizacion';

@Injectable()
export class CompraService {

  constructor(protected http: HttpService) { }

  traerTodas(): Observable<Compra[]> {
    return this.http.doGet<Compra[]>(`${environment.urlApi}compras`, this.http.optsName('consultar motos'));
  }

  crear(compraFormulario: any, cotizacion: Cotizacion): Compra {
    return {
      ...compraFormulario,
      cotizacion
    };
  }

  guardar(compra: Compra): Promise<string> {
    return this.http.doPost<Compra, string>(`${environment.urlApi}/compras`, compra,
      this.http.optsName('crear/actualizar compras')).toPromise();
  }

  traerInformacionDePago(idMoto: number): Promise<{ valor: Cotizacion }> {
    return this.http.doGet<{ valor: Cotizacion }>(`${environment.urlApi}compras/cotizacion/${idMoto}`,
      this.http.optsName('consultar cotización')).toPromise();
  }

}
