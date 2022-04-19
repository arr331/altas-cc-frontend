import { Component, OnInit } from '@angular/core';
import { Moto } from '../../shared/modelo/moto';
import { MotoService } from '../../shared/service/moto.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.scss']
})
export class MotoComponent implements OnInit {
  listaMotos: Moto[];

  constructor(private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.traerTodas().subscribe(respuesta => {
      this.listaMotos = respuesta;
    });
  }

}