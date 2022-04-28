import { Component, OnInit } from '@angular/core';
import { Offcanvas } from '@shared/utlidades/offcanvas';
import { Moto } from '../../shared/modelo/moto';
import { MotoService } from '../../shared/service/moto.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.scss']
})
export class MotoComponent implements OnInit {
  listaMotos: Moto[];
  moto: Moto;

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.traerTodas().subscribe(respuesta => {
      this.listaMotos = respuesta;
      console.log(respuesta);
    });
  }

  abrirCompra(moto: Moto): void {
    this.moto = moto;
    Offcanvas.show('offcanvasCompra');
  }

}
