//Angular Framework
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//App
import { HeroDetailComponent } from './hero-detail.component'
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[]; 
  selectedHero: Hero;
  error: any;
  addingHero: boolean;

  constructor(private heroService:HeroService, private router:Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes); 
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

  addHero(){
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero:Hero){
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(deletedHero:Hero, event:any){
    event.stopPropagation();
    this.heroService.delete(deletedHero)
          .then(response=>{
            this.heroes = this.heroes.filter(hero => hero !== deletedHero);
      if (this.selectedHero === deletedHero){
        this.selectedHero = null; 
      }       
      })
      .catch(error=>this.error = error);    
  }

  gotoDetail(){
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }
}