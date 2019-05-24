import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes : Hero[];

  // users$: object;

  users$: Observable<object>;

  heroes$: Observable<Hero[]>;

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getUsers();
  }

  ngOnDestroy(){
    
  }
  

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

  getUsers(): void {
    //  this.heroService.getUsers().subscribe(users => this.users$ = users);
    this.users$ = this.heroService.getUsers();
  }

}
