import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  
  heroes: Hero[];
  // selectedHero: Hero;

  constructor(private heroService: HeroService) {


   }

  ngOnInit() {
    // this.selectedHero = this.hero;
    // console.log(this.hero);
    this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // onSelect(p: Hero): void {
  //   this.selectedHero = p;
  // }

}
