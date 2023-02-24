import { Candidate } from './candidate.model';
import { BaseEntety } from './BaseEntity.model';
import { Product } from './product.model';
import { User } from './user.model';
import { Address } from './adress.model';
import { Customer } from './customer.model';
import { Employee } from './employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Typescript';

  ngOnInit(): void {

      const candidate = new Candidate('Ivan','Ivanovic',new Date(1998 , 26,2))
      const candidate2 = new Candidate('Milan','Milanic',new Date(1977 , 15,7))
      console.log(candidate,candidate2);

      let candidateArray:Candidate[]= [candidate,candidate2];
      console.log(candidateArray);

      const candidates:Candidate[]=[candidate,candidate2]
      const displayM=this.printCandidates(candidates)
      console.log(displayM);


    const customer =new Customer(1,"Petar","petar@gmail.com",38144444,"Pere Perica 21");
    const displayCustomer=customer.displayCustomer();
    console.log(displayCustomer);
  }
     printCandidates(candidates:Candidate[]):string {
      let message:string="";
      for( let candidate of candidates) {
        message+=candidate.firstName + " "+ candidate.lastName + ":"+candidate.birthday;
      }
      return message;
    }

      const employee=new Employee(1 ,"Ivan","ivanivanovic@gmail.com",915266470,"Designer");
      const employee2=new Employee(2,"Milan","milanmilanic@gmail.com",33654188,"Web developer");
      console.log(employee,employee2);

      const product:Product=new Product(1,"Iphone",1250,"14pro");
      const product1:Product=new Product(2,"Samsung",990,"s22");
      const product2:Product=new Product(3,"Nokia",340,"100s");
      const product3:Product=new Product(4,"Sony",555,"i54");
      const product4:Product=new Product(5,"Huawei",789,"a89");
      const products:Product[]=[product,product1,product2,product3,product4];
      const displayProduct=product.getInformation(products);
      console.log(displayProduct);

    }

