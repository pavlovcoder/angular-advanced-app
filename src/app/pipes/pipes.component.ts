import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public birthday: Date = new Date(1996, 2, 5);
  public toggle: boolean = true;

  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  public toggleFormat(): void {
    this.toggle = !this.toggle;
  }

  constructor() { }

  ngOnInit() {
  }

}
