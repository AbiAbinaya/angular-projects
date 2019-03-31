import { Injectable } from '@angular/core';
import {FirstEditor} from './first-editor/first-editor';
import {FIRSTEDITORMOCK} from './mock-first-editor';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<FirstEditor[]>
  {
    return of(FIRSTEDITORMOCK);
  }
}
