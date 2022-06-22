export interface Client {
    name: string;
    // Refere-se ao nome do cliente  
    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id  
    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês  
    calculateBill(): number;
}

const client: Client = {
    name: "Zeri",
    registrationNumber: 2,
    consumedEnergy: 200,

    calculateBill: () => {
        return 2 + 6;
    }
}

//   console.log(client.calculateBill())

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

//exercicio 3
export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }
    public getResidentsQuantity() {
        return this.residentsQuantity
    }
}
//boiei nesse implements tava meio perdido sobre como fazer mas cosnegui xD, mas n sei o por que do meu cep ficar pedindo pra ser number

export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        cep: number,
        residentsQuantity: string
    ) {
        super(cep, residentsQuantity)
    }
    public getCPF() {
        return this.cpf
    }
    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}
//----------
export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }
    public getFloorsQuantity() {
        return this.floorsQuantity
    }
}

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

//--------------

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
    public getMachinesQuantity() {
        return this.machinesQuantity
    }
}

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string,
        public machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }

    public getIndustryNumber(): string {
        return this.insdustryNumber;
    }
}
