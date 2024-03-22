import { InterfazInstructores } from "src/instructores/interfaz-instructores/interfaz-instructores.interface";

export interface InterfazClases extends Document{
    nombre: string;
    instructor : InterfazInstructores;
}
