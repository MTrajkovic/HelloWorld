import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Typescript';

  ngOnInit(): void {
    class Candidate {
      firstName:string;
      lastName:string;
      birthday:Date;

      constructor (firstName:string,lastName:string,birthday:Date){
        this.firstName=firstName;
        this.lastName=lastName;
        this.birthday=birthday;
      }

    }
      const candidate = new Candidate('Ivan','Ivanovic',new Date(1998 , 26,2))
      const candidate2 = new Candidate('Milan','Milanic',new Date(1977 , 15,7))
      console.log(candidate,candidate2);
    }
}
