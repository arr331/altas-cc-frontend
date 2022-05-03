import { browser, by, element } from 'protractor';

export class PaginaMoto {
    // private listaMotos = element.all(by.id('lista-motos'));
    private botonCodigo = element(by.id('boton-codigo'));
    private botonAbrirCompra = element(by.id('boton-abrir-compra-0'));

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
        browser.waitForAngular();
        browser.actions().mouseMove(element(by.id('boton-abrir-compra-0'))).perform();
        await this.botonAbrirCompra.click();
    }
}