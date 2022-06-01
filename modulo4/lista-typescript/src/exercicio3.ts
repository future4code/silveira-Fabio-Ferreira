import { NotEmittedStatement } from "typescript";

type filme = {
    nome: string;
    lancamento: string;
    genero: GENERO;
    nota?: number
}

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const tipoFilme = (nome:string, lancamento:string, genero:GENERO, nota?:number):filme => {
    return {nome:nome, lancamento:lancamento, genero:genero, nota: nota}
}

console.log(tipoFilme('The Babadook', '2014', GENERO.TERROR, 86))