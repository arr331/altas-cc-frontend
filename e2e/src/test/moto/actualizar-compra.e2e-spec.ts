import { PaginaMoto } from '../../page/moto/moto.po';
import { PaginaActualizarCompra } from '../../page/moto/actualizar-compra.po';

describe('Página actualizar compra', () => {
    let paginaActualizarCompra: PaginaActualizarCompra;
    let paginaMoto: PaginaMoto;
    const CODIGO = '2022-3';

    beforeEach(() => {
        paginaActualizarCompra = new PaginaActualizarCompra();
        paginaMoto = new PaginaMoto();
    });

    it('No debería encontrar una compra', () => {
        paginaMoto.navigateToMoto();
        paginaMoto.clickBotonCodigo();
        paginaActualizarCompra.ingresarCodigoCompra(`${CODIGO}333`);
        paginaActualizarCompra.clickBotonBuscar();
        expect(paginaActualizarCompra.getSweetAlertTitle()).toEqual('Atención');
        paginaActualizarCompra.clickAlertConfirm();
    });

    it('Debería actualizar una compra', () => {
        paginaMoto.navigateToMoto();
        paginaMoto.clickBotonCodigo();
        paginaActualizarCompra.ingresarCodigoCompra(CODIGO);
        paginaActualizarCompra.clickBotonBuscar();
        paginaActualizarCompra.clickBotonActualizarCompra();
        expect(paginaActualizarCompra.getSweetAlertTitle()).toEqual('¡Felicitaciones!');
        paginaActualizarCompra.clickAlertConfirm();
    });
});
