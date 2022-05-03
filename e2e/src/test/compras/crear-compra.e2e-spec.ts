import { PaginaMoto } from '../../page/moto/moto.po';
import { PaginaCrearCompra } from '../../page/compra/crear-compra.po';

describe('Página crear compra', () => {
    let paginaMoto: PaginaMoto;
    let paginaCrearCompra: PaginaCrearCompra;
    const NOMBRE_COMPLETO = 'Adrian Ramírez';
    const CEDULA = '1040048300';

    beforeEach(() => {
        paginaCrearCompra = new PaginaCrearCompra();
        paginaMoto = new PaginaMoto();
    });

    it('Debería crear una compra', () => {
        paginaMoto.navigateToMoto();
        paginaMoto.clickBotonAbrirCompra();
        paginaCrearCompra.ingresarNombreCompleto(NOMBRE_COMPLETO);
        paginaCrearCompra.ingresarCedula(CEDULA);
        paginaCrearCompra.clickBotonGuardarCompra();
        expect(paginaCrearCompra.getSweetAlertTitle()).toEqual('¡Felicitaciones!');
    });

    it('No debería crear una compra por campos inválidos', () => {
        paginaMoto.navigateToMoto();
        paginaMoto.clickBotonAbrirCompra();
        paginaCrearCompra.clickBotonGuardarCompra();
        expect(paginaCrearCompra.getSweetAlertTitle()).toEqual('¡Atención!');
    });


    it('No debería crear una compra por un abono demasiado alto', () => {
        const ABONO = 9999999;
        paginaMoto.navigateToMoto();
        paginaMoto.clickBotonAbrirCompra();
        paginaCrearCompra.ingresarAbono(ABONO);
        paginaCrearCompra.clickBotonGuardarCompra();
        expect(paginaCrearCompra.getSweetAlertTitle()).toEqual('¡Atención!');
    });
});