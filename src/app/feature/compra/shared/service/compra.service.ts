import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compra } from '../modelo/compra';

@Injectable()
export class CompraService {

  constructor(protected http: HttpService) { }

  traerTodas(): Observable<Compra[]> {
    return this.http.doGet<Compra[]>(`${environment.urlApi}compras`, this.http.optsName('consultar motos'));
  }

  crear(compraFormulario: any): Compra {
    return {
      ...compraFormulario
    };
  }

  guardar(compra: Compra): Observable<boolean> {
    return this.http.doPost<Compra, boolean>(`${environment.urlApi}/compras`, compra,
      this.http.optsName('crear/actualizar compras'));
  }

  traerInformacionDePago(idMoto: number): Promise<any> {
    return this.http.doGet<any>(`${environment.urlApi}compras/${idMoto}`,
      this.http.optsName('consultar motos')).toPromise();
  }

}
