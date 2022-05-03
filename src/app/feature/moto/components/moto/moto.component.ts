import { Component, OnInit } from '@angular/core';
import { Loading } from '@core/loading/loading';
import { TrmRespuesta } from '@core/modelo/trm-respuesta';
import { Offcanvas } from '@shared/utlidades/offcanvas.util';
import { Moto } from '../../shared/modelo/moto';
import { MotoService } from '../../shared/service/moto.service';
import { TrmService } from '../../shared/service/trm.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.scss']
})
export class MotoComponent implements OnInit {
  listaMotos: Moto[];
  moto: Moto;
  trmData: TrmRespuesta;
  viewTrm: boolean;

  constructor(private motoService: MotoService, private trmService: TrmService) { }

  ngOnInit(): void {
    Loading.state.next(true);
    this.motoService.traerTodas().subscribe(respuesta => {
      this.listaMotos = respuesta;
      Loading.state.next(false);
    });
    this.obtenerTrm();
  }

  abrirCompra(moto: Moto): void {
    this.moto = moto;
    Offcanvas.show('offcanvasCompra');
  }

  obtenerTrm(): void {
    this.trmData = undefined;
    this.trmService.vigenciaHoy().subscribe(respuesta =>
      this.trmData = respuesta[respuesta.length - 1]
    );
  }

}
