import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public nameDoctor!: string | any


  constructor(){}

  ngOnInit(): void {
    this.nameDoctor = localStorage.getItem('@NAMEDOCTOR')
  }

}
