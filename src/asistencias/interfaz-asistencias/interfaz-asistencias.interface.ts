import { InterfazClases } from "src/clases/interfaz-clases/interfaz-clases.interface";
import { InterfazClientes } from "src/clientes/interfaz-clientes/interfaz-clientes.interface";

export interface InterfazAsistencias extends Document{
    cliente : InterfazClientes;
    clase : InterfazClases;
    fecha : Date;
}
