import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of, Subject } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private MessageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.MessageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  addHeroes(hero) {
    let newHero = HEROES;
    newHero.push(hero);
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}
