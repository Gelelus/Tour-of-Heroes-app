import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  heroName: string;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(): void {
    const name = this.heroName.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
    this.heroName = '';
  }

  delete(hero: Hero): void {
    this.heroService.deleteHero(hero).subscribe(
      () => { 
        this.heroes = this.heroes.filter((h) => h !== hero);
      }
    );
  }
  
}
