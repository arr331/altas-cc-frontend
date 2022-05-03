import { Moto } from 'src/app/feature/moto/shared/modelo/moto';

export class ListarMotosMock {
  public static default: Moto[] = [
    {
      id: 1,
      precio: 24500.0,
      cc: 1299,
      marca: 'KTM',
      estado: 'A',
      descuento: 10.0,
      nombreImagen: 'super-duke.png',
      nombreMoto: 'Super Duke 1290',
      cantidad: 3
    },
    {
      id: 2,
      precio: 22000.0,
      cc: 999,
      marca: 'YAMAHA',
      estado: 'A',
      descuento: 8.0,
      nombreImagen: 'r1.png',
      nombreMoto: 'YZF-R1',
      cantidad: 2
    },
    {
      id: 3,
      precio: 21000.0,
      cc: 999,
      marca: 'HONDA',
      estado: 'I',
      descuento: 0.0,
      nombreImagen: 'cbr.png',
      nombreMoto: 'CBR 1000RR',
      cantidad: 1
    }
  ];
}
