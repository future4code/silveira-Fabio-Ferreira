class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
    public introduceYourself: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string,
          introduceYourself: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
          this.introduceYourself = `olá sou ${this.name} bom dia`
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
  }

  const batata = new User("bbbbbbbbbb", "bbbb@","zaza","ddd", 'assas')


  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      introduceYourself: string,
      creditCard: string
    ) {
      super(id, email, name, password, introduceYourself);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

const costumero =  new Customer("aaaaa", "aaaa@","fafa","ssss","qqqqqqqq", "banana")
console.log(costumero)