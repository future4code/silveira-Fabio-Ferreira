import {v4} from "uuid"

// exercicio 1 

//a) sim, pois com uma string seria possivel colocar letras e numeros o que nos da muito mais opções de ids


// b)

export class IdGenerator {
    generateId = () => {
        return v4();
    }
}