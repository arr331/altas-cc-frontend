import { browser, by, element } from 'protractor';

export class PaginaListarCompra {
    private listaCompras = element.all(by.id('tr-compras'));

    navigateToListar(): Promise<any> {
        return browser.get(`${browser.baseUrl}compras`) as Promise<any>;
    }

    async contarCompras(): Promise<number> {
        return await this.listaCompras.count();
    }
}