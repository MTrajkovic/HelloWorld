export class Customer {
  private id:number;
  private name:string;
  private email:string;
  private phone:number;
  private address:string;


  constructor(id:number,name:string,email:string,phone:number,adress:string) {
    this.id=id,
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.address=adress;
  }
}
