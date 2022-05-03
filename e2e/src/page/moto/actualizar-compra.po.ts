import { browser, by, element } from 'protractor';

export class PaginaActualizarCompra {
    private inputCodigo = element(by.id('codigoCompra'));

    private botonBuscarCodigo = element(by.id('boton-buscar-codigo'));
    private botonActualizarCompra = element(by.id('boton-actualizar-compra'));
    private sweetalertTitle = element(by.className('swal2-title'));
    private sweetalertConfirmButton = element(by.className('swal2-confirm'));

    async ingresarCodigoCompra(codigoCompra: string): Promise<void> {
        browser.sleep(200);
        await this.inputCodigo.sendKeys(codigoCompra);
    }

    async clickBotonBuscar(): Promise<void> {
        await this.botonBuscarCodigo.click();
    }

    async clickBotonActualizarCompra(): Promise<void> {
        await this.botonActualizarCompra.click();
    }

    async getSweetAlertTitle(): Promise<string> {
        return await this.sweetalertTitle.getText();
    }

    async clickAlertConfirm(): Promise<void> {
        await this.sweetalertConfirmButton.click();
    }
}
