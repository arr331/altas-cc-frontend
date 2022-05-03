import { Component, OnInit } from '@angular/core';
import { Loading } from '@core/loading/loading';
import { Moto } from '../../shared/modelo/moto';
import { MotoService } from '../../shared/service/moto.service';

@Component({
  selector: 'app-listar-moto',
  templateUrl: './listar-moto.component.html',
  styleUrls: ['./listar-moto.component.scss']
})
export class ListarMotoComponent implements OnInit {
  listaMotos: Moto[];

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    Loading.state.next(true);
    this.motoService.traerTodas().subscribe(respuesta => {
      this.listaMotos = respuesta;
      Loading.state.next(false);
    });
  }

}
