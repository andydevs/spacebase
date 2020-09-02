import { Component, OnInit, Input } from '@angular/core';
import { NeowsAsteroid } from 'src/app/neows-asteroid';

@Component({
    selector: 'app-asteroid',
    templateUrl: './asteroid.component.html',
    styleUrls: ['./asteroid.component.scss']
})
export class AsteroidComponent implements OnInit {
    @Input('asteroid') asteroid: NeowsAsteroid;

    constructor() {}
    
    ngOnInit(): void {}
}
