import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    title: "My Dashboard";
    heroes: Hero[] = [];
    
    constructor(private heroService:HeroService, private router:Router){}

    ngOnInit(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero:Hero){
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}