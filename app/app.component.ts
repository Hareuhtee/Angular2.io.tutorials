import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: 
  `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} Details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
  `
})

export class AppComponent { 
  title = 'Tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'Bahdou'
  };
}

class Hero {
  id: number;
  name: string;
}
