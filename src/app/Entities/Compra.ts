import { Usuario } from "./Usuario";
import { Producto } from "./Producto";
import { Factura } from "./Factura";

export class Compra {
    id: number | undefined;
    usuario: Usuario | undefined;
    producto: Producto | undefined;
    factura: Factura | undefined;


}