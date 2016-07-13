//angular framework
import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
//app specific
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: 
    `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
        <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService
    ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}