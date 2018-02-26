import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
//import {HeroesMock} from '../mock-heroes'
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { id: 1, name: 'Windstorm' };
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {    
    //this.hero = "Windstorm";
    this.getHeroes();
    //this.selectedHero = this.hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    //alert('Clicked');
    this.selectedHero = hero;
  }

}
