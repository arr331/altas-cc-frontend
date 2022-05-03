import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

export class Alertas {
    static error(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
        return this.generate('error', titulo, texto, textoConfirmacion);
    }

    static exito(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
        return this.generate('success', titulo, texto, textoConfirmacion);
    }

    static informativo(titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
        return this.generate('info', titulo, texto, textoConfirmacion);
    }

    private static generate(icon: SweetAlertIcon, titulo: string, texto?: string, textoConfirmacion?: string): Promise<SweetAlertResult> {
        return Swal.fire({
            icon,
            title: titulo,
            text: texto,
            confirmButtonText: textoConfirmacion || 'Aceptar'
        });
    }
}
