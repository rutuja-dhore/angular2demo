import { Component, OnInit } from '@angular/core';
import {Hero} from 'app/hero';
import {HEROES } from 'app/mock-heros';
import {HeroService} from 'app/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})


export class AppComponent {
  constructor(private heroService: HeroService) { }


  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHero(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit() {
    this.getHeroes();
  }
}
