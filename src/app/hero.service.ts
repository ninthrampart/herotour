import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HeroesMock } from './mock-heroes';
import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('Fetched heroes');
    var tmp = new HeroesMock();
    var a = tmp.HEROES; 
    return of(a);
  }

}
