import { browser, by, element } from 'protractor';

export class PaginaListarMoto {
    private listaMotos = element.all(by.id('tr-motos'));

    navigateToListar(): Promise<any> {
        return browser.get(`${browser.baseUrl}motos/listar`) as Promise<any>;
    }

    async contarMotos(): Promise<number> {
        return await this.listaMotos.count();
    }
}