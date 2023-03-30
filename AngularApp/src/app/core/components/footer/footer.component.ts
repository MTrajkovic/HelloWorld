import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  Year: number | Date = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
    this.Year;
  }

}
