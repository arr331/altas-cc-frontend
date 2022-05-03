import { PaginaCrearMoto } from '../../page/moto/crear-moto.po';

describe('Página crear moto', () => {
    let paginaCrearMoto: PaginaCrearMoto;

    beforeEach(() => {
        paginaCrearMoto = new PaginaCrearMoto();
        paginaCrearMoto.navigateToCrear();
    });

    it('Debería mostrar título crear moto', () => {
        expect(paginaCrearMoto.obtenertitulo()).toEqual('Crear moto');
    });

    it('Debería crear una moto', () => {
        const NOMBRE_MOTO = 'Z 1000';
        const MARCA = 'Kawasaki';
        const CC = 999;
        const NOMBRE_IMAGEN = 'z1000.png';
        const PRECIO = 12000;
        const DESCUENTO = 2;
        const ESTADO = 'A';
        const CANTIDAD = 3;

        paginaCrearMoto.navigateToCrear();
        paginaCrearMoto.ingresarNombreMoto(NOMBRE_MOTO);
        paginaCrearMoto.ingresarMarca(MARCA);
        paginaCrearMoto.ingresarCc(CC);
        paginaCrearMoto.ingresarNombreImagen(NOMBRE_IMAGEN);
        paginaCrearMoto.ingresarPrecio(PRECIO);
        paginaCrearMoto.ingresarDescuento(DESCUENTO);
        paginaCrearMoto.ingresarEstado(ESTADO);
        paginaCrearMoto.ingresarCantidad(CANTIDAD);

        paginaCrearMoto.clickBotonGuardarMoto();
        expect(paginaCrearMoto.getSweetAlertTitle()).toEqual('¡Muy bien!');
        paginaCrearMoto.clickAlertConfirm();
    });
    
    it('No debería crear una moto por campos inválidos', () => {
        paginaCrearMoto.clickBotonGuardarMoto();
        expect(paginaCrearMoto.getSweetAlertTitle()).toEqual('¡Atención!');
        paginaCrearMoto.clickAlertConfirm();
    });
});
