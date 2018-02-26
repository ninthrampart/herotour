import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HeroesMock } from './mock-heroes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]>{
    var tmp = new HeroesMock();
    var a = tmp.HEROES; 
    return of(a);
  }

}
