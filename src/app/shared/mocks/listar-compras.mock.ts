import { Compra } from 'src/app/feature/compra/shared/modelo/compra';
import { Cotizacion } from 'src/app/feature/compra/shared/modelo/cotizacion';

export class ListarComprasMock {
  public static default: Compra[] = [
    {
      idMoto: 1,
      cedula: '1040048300',
      nombreCompleto: 'Adrian Ramírez',
      fecha: new Date(),
      valorTotal: 22050.0,
      abono: 22050.0,
      codigo: '2022-1',
      estado: 'C'
    },
    {
      idMoto: 6,
      cedula: '1040046200',
      nombreCompleto: 'Andres Hernández',
      fecha: new Date(),
      valorTotal: 15470.0,
      abono: 15470.0,
      codigo: '2022-2',
      estado: 'C'
    },
    {
      idMoto: 3,
      cedula: '39189986',
      nombreCompleto: 'Beatriz Osorio',
      fecha: new Date(),
      valorTotal: 21000.0,
      abono: 10500.0,
      codigo: '2022-3',
      estado: 'I'
    }
  ];

  public static cotizacion: Cotizacion = {
    moto: {
      id: 3,
      precio: 21000.0,
      cc: 999,
      marca: 'HONDA',
      estado: 'I',
      descuento: 0.0,
      nombreImagen: 'cbr.png',
      nombreMoto: 'CBR 1000RR',
      cantidad: 1
    },
    valorSinDescuento: 21000.0,
    valorFinal: 21420.0,
    impuesto: 2.0,
    descuentoLunes: 0.0,
    descuentoFinDeSemana: 0.0
  }

} 