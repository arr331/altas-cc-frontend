import { PaginaListarCompra } from '../../page/compra/listar-compra.po';

describe('Página listar compras', () => {
    let paginaListarCompra: PaginaListarCompra;;

    beforeEach(() => {
        paginaListarCompra = new PaginaListarCompra();
    });
    
    it('Debería listar las compras', () => {
        paginaListarCompra.navigateToListar();
        expect(paginaListarCompra.contarCompras()).toBeGreaterThan(2);
    });
});