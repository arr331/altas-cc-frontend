import { by, element } from 'protractor';

export class PaginaCrearCompra {
    private inputNombreCompleto = element(by.id('nombreCompleto'));
    private inputCedula = element(by.id('cedula'));
    private inputAbono = element(by.id('abono'));

    private botonGuardarCompra = element(by.id('boton-comprar'));
    private sweetalertTitle = element(by.className('swal2-title'));
    private sweetalertConfirmButton = element(by.className('swal2-confirm'));

    async clickBotonGuardarCompra(): Promise<void> {
        await this.botonGuardarCompra.click();
    }

    async ingresarNombreCompleto(nombreCompleto: string): Promise<void> {
        await this.inputNombreCompleto.sendKeys(nombreCompleto);
    }

    async ingresarCedula(cedula: string): Promise<void> {
        await this.inputCedula.sendKeys(cedula);
    }

    async ingresarAbono(abono: number): Promise<void> {
        await this.inputAbono.sendKeys(abono);
    }

    async getSweetAlertTitle(): Promise<string> {
        return await this.sweetalertTitle.getText();
    }

    async clickAlertConfirm(): Promise<void> {
        await this.sweetalertConfirmButton.click();
    }
}
