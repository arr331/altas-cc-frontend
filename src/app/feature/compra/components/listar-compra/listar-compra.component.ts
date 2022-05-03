import { Component, OnInit } from '@angular/core';
import { Loading } from '@core/loading/loading';
import { Compra } from '../../shared/modelo/compra';
import { CompraService } from '../../shared/service/compra.service';

@Component({
  selector: 'app-listar-compra',
  templateUrl: './listar-compra.component.html'
})
export class ListarCompraComponent implements OnInit {
  listaCompras: Compra[];

  constructor(private compraService: CompraService) { }

  ngOnInit(): void {
    Loading.state.next(true);
    this.compraService.traerTodas().subscribe(respuesta => {
      this.listaCompras = respuesta;
      Loading.state.next(false);
    });
  }
}
