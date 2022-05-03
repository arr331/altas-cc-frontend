import { Cotizacion } from './cotizacion';

export interface Compra {
    idMoto: number;
    cedula: string;
    nombreCompleto: string;
    fecha: Date;
    valorTotal: number;
    abono: number;
    codigo: string;
    estado: string;
    cotizacion?: Cotizacion;
}
