export enum USER_ROLES {
   GUEST = "GUEST",
   ADMIN = "ADMIN"

}

export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
   role: USER_ROLES
}

// EXEMPLO 2

// Crie também um type AuthenticationData 
// para representar o payload do seu token

export type authenticationData = {
   id: string
   role: string
}