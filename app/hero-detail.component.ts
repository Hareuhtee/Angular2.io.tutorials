//Angular Framework
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
//App
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component ({
    moduleId: module.id,
    selector: "my-hero-detail",
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit, OnDestroy {
  hero: Hero;
  sub: any;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {}

  goBack(){
    window.history.back();
  }

  ngOnInit(){
      this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.heroService.getHero(id).then(hero=>this.hero = hero);
    })
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }
}


