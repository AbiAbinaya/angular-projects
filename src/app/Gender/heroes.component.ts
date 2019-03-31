import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = [
    {
      name: 'Windstorm',
      age: 29,
      gender: 'male'
    }, {
      name: 'Sandstrom',
      age: 40,
      gender: 'female'
    }
  ];
  male = 'https://cdn0.iconfinder.com/data/icons/customicondesign-office7-shadow-png/256/Male.png';
  female = 'https://cdn0.iconfinder.com/data/icons/customicondesign-office7-shadow-png/256/Female.png';
  constructor() { }

  ngOnInit() {
  }

}
