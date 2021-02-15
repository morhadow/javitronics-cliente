import { TipoProducto } from "./TipoProducto";

export class Producto {
    id: number | undefined;
    nombre: String | undefined;
    codigo: String | undefined;
    existencias: number | undefined;
    tipoproducto: TipoProducto | undefined;


}