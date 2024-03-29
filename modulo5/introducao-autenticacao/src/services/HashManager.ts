import { compareSync, hashSync } from "bcryptjs"

export class HashManager{
    createHash = (plainText: string):string =>{
        const cost = 12
        const salt:string = "algumacoisa"
        const cypherText:string = hashSync(plainText, salt)

        return cypherText
    }
    compareHash = (plainText:string, cypherText:string):boolean =>{
        return compareSync(plainText, cypherText)
    }
}