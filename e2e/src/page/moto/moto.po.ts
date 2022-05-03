import { browser, by, element } from 'protractor';

export class PaginaMoto {
    private listaMotos = element.all(by.id('lista-motos'));
    private botonCodigo = element(by.id('boton-codigo'));
    private botonAbrirCompra = element(by.id('boton-abrir-compra'));

    navigateToMoto(): Promise<any> {
        return browser.get(browser.baseUrl) as Promise<any>;
    }

    async getTitleText(): Promise<string> {
        return element(by.id('titulo-motos')).getText();
    }

    async clickBotonCodigo(): Promise<void> {
        await this.botonCodigo.click();
    }

    async clickBotonAbrirCompra(): Promise<void> {
        await this.botonAbrirCompra.click();
    }

    async getListaMotos() {
        await browser.waitForAngularEnabled(false);
        return await this.listaMotos.get(0).click();
    }
}