// EXERCICIO 2

class Transaction {
    private description: string
    private value: number
    private date: string
    constructor(
        newDescription: string,
        newValue: number,
        newDate: string
    ) {
        this.description = newDescription
        this.value = newValue
        this.date = newDate
    }
    public getDescription(): void {
        console.log(this.description)
    }
    public getValue(): void {
        console.log(this.value)
    }
    public getDate(): void {
        console.log(this.date)
    }
}

const newTransaction = ("boletos infinitos " + 50000 + " 20/06/2022")

console.log(newTransaction)


//EXERCICIO 2 
type UserAccount = {
    name: string,
    id: string,
    balance: number,
    credit: number,
    invoice: number,
    birthDate: string,
}
class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    public set NewAccount(value: UserAccount[]) {
        this.accounts = value
    }
}
