import { PaginaListarMoto } from '../../page/moto/listar-moto.po';

describe('Página listar moto', () => {
    let paginaListarMoto: PaginaListarMoto;

    beforeEach(() => {
        paginaListarMoto = new PaginaListarMoto();
    });
    
    it('Debería listar las motos', () => {
        paginaListarMoto.navigateToListar();
        expect(paginaListarMoto.contarMotos()).toBeGreaterThan(3);
    });
});