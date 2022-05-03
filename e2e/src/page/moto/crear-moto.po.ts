import { browser, by, element } from 'protractor';

export class PaginaCrearMoto {
    private inputNombreMoto = element(by.id('nombreMoto'));
    private inputMarca = element(by.id('marca'));
    private inputCc = element(by.id('cc'));
    private inputNombreImagen = element(by.id('nombreImagen'));
    private inputPrecio = element(by.id('precio'));
    private inputDescuento = element(by.id('descuento'));
    private inputEstado = element(by.id('estado'));
    private inputCantidad = element(by.id('cantidad'));

    private sweetalertTitle = element(by.className('swal2-title'));
    private botonGuardarMoto = element(by.id('guardar-moto'));
    private sweetalertConfirmButton = element(by.className('swal2-confirm'));

    navigateToCrear(): Promise<any> {
        return browser.get(`${browser.baseUrl}motos/crear`) as Promise<any>;
    }

    async clickBotonGuardarMoto(): Promise<void> {
        await this.botonGuardarMoto.click();
    }

    async obtenertitulo(): Promise<string> {
        return await element(by.id('titulo-crear-moto')).getText();
    }

    async ingresarNombreMoto(nombreMoto: string): Promise<void> {
        await this.inputNombreMoto.sendKeys(nombreMoto);
    }

    async ingresarMarca(marca: string): Promise<void> {
        await this.inputMarca.sendKeys(marca);
    }

    async ingresarCc(cc: number): Promise<void> {
        await this.inputCc.sendKeys(cc);
    }

    async ingresarNombreImagen(nombreImagen: string): Promise<void> {
        await this.inputNombreImagen.clear();
        await this.inputNombreImagen.sendKeys(nombreImagen);
    }

    async ingresarPrecio(precio: number): Promise<void> {
        await this.inputPrecio.sendKeys(precio);
    }

    async ingresarDescuento(descuento: number): Promise<void> {
        await this.inputDescuento.sendKeys(descuento);
    }

    async ingresarEstado(estado: string): Promise<void> {
        await this.inputEstado.sendKeys(estado);
    }

    async ingresarCantidad(cantidad: number): Promise<void> {
        await this.inputCantidad.sendKeys(cantidad);
    }

    async getSweetAlertTitle(): Promise<string> {
        return await this.sweetalertTitle.getText();
    }

    async clickAlertConfirm(): Promise<void> {
        await this.sweetalertConfirmButton.click();
    }
}