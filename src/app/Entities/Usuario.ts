import { Tipousuario } from "./Tipousuario";
import { Carrito } from "./Carrito";

export class Usuario {
    id: number | undefined;
    nombre: String | undefined;
    apellidos: String | undefined;
    dni: String | undefined;
    email: String | undefined;
    usuario: String | undefined;
    contraseña: String | undefined;
    tipousuario: Tipousuario | undefined;
}