import { Injectable } from '@angular/core';
import { TrmRespuesta } from '@core/modelo/trm-respuesta';
import { Observable } from 'rxjs';
import { HttpService } from '../../../../core/services/http.service';
const DATOS_COLOMBIA_TRM_URL = 'https://www.datos.gov.co/resource/32sa-8pi3.json'

@Injectable({
  providedIn: 'root'
})
export class TrmService {
  constructor(private http: HttpService) { }

  vigenciaHoy(): Observable<TrmRespuesta[]> {
    return this.http.doGet<TrmRespuesta[]>(DATOS_COLOMBIA_TRM_URL);
  }
}
