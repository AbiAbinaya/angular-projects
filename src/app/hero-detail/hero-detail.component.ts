import { Component, OnInit, Input} from '@angular/core';
// import { FirstEditor } from '../first-editor';
import { FirstEditor } from '../first-editor/first-editor';
import { HeroService } from '../hero.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: FirstEditor;

  heroes: FirstEditor[];

  constructor(private heroService: HeroService) { console.log("This is newly created component"); }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes= heroes);
  }
}
