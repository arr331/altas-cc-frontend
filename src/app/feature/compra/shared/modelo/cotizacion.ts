import { Moto } from 'src/app/feature/moto/shared/modelo/moto';

export interface Cotizacion {
    moto: Moto;
    valorSinDescuento: number;
    valorFinal: number;
    impuesto: number; // 2%
    descuentoLunes: number; // 1.5%
    descuentoFinDeSemana: number; // 1%
}
