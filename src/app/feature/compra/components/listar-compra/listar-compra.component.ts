import { Component, OnInit } from '@angular/core';
import { Compra } from '../../shared/modelo/compra';
import { CompraService } from '../../shared/service/compra.service';

@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html',
  styleUrls: ['./listar-compra.component.scss']
})
export class ListarCompraComponent implements OnInit {
  listaCompras: Compra[];

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    this.compraService.traerTodas().subscribe(respuesta => {
      this.listaCompras = respuesta;
      console.log(respuesta);
    });
  }
}
