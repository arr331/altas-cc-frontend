import { PaginaMoto } from '../../page/moto/moto.po';

describe('Página moto', () => {
    let paginaMoto: PaginaMoto;

    beforeEach(() => {
        paginaMoto = new PaginaMoto();
    });

    it('Debería mostrar título de página motos', () => {
        paginaMoto.navigateToMoto();
        expect(paginaMoto.getTitleText()).toEqual('Catálogo de motos');
    });
});
