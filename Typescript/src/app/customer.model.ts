import { Address } from './adress.model';
export class Customer {
  private id: number;
  private name: string;
  private email: string;
  private phone: number;
  private address: Address;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: number,
    adress: Address
  ) {
    (this.id = id), (this.name = name);
    this.email = email;
    this.phone = phone;
    this.address = adress;
  }
  displayCustomer(): string {
    const message: string = `My name is: ${this.name}. You can contact me via email ${this.email} or phone ${this.phone}`;
    return message;
  }
  getName():string {
    return this.name;
  }
}
