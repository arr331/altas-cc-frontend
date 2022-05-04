import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Alertas } from '@core/alertas/alertas';
import { ManejadorError } from '@core/interceptor/manejador-error';
import { Loading } from '@core/loading/loading';
import { Modal } from '@shared/utlidades/modal.util';
import { Compra } from 'src/app/feature/compra/shared/modelo/compra';
import { CompraService } from 'src/app/feature/compra/shared/service/compra.service';
import { Moto } from '../../shared/modelo/moto';
import { MotoService } from '../../shared/service/moto.service';

@Component({
  selector: 'app-actualizar-compra',
  templateUrl: './actualizar-compra.component.html',
  styleUrls: ['./actualizar-compra.component.scss']
})
export class ActualizarCompraComponent implements OnInit {
  codigoCompra = new FormControl('', Validators.required);
  moto: Moto;
  compra: Compra;
  listaMotos: Moto[];

  constructor(private compraService: CompraService, protected manejadorError: ManejadorError,
              private motoService: MotoService) { }

  ngOnInit(): void {
    this.motoService.traerTodas().subscribe(respuesta => {
      this.listaMotos = respuesta;
    });
  }

  buscar(): void {
    if (this.codigoCompra.valid) {
      Loading.state.next(true);
      this.compraService.traerPorCodigo(this.codigoCompra.value).subscribe(respuesta => {
        this.compra = respuesta;
        this.moto = this.listaMotos.find(moto => moto.id === respuesta.idMoto);
        Loading.state.next(false);
      }, error => this.manejadorError.handleError(error));
    }
  }

  completarCompra(): void {
    Loading.state.next(true);
    this.compraService.actualizar(this.codigoCompra.value).subscribe(() => {
      Loading.state.next(false);
      this.resetear();
      Modal.hide('actualizarCompraModal');
      Alertas.exito('¡Felicitaciones!', `Disfruta tu nueva moto`);
    }, error => this.manejadorError.handleError(error));
  }

  resetear(): void {
    this.compra = this.moto = undefined;
  }

}
