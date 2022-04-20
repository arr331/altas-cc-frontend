import { Component, OnInit } from '@angular/core';
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
    this.motoService.traerTodas().subscribe(respuesta => {
      this.listaMotos = respuesta;
      console.log(respuesta);
    });
  }

}
