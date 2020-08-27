import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FEED } from "../mock/neows.feed";

export interface NeowsAsteroid {
    name: string,
    diameter: {
        min: string,
        max: string
    },
    hazardous: boolean
}

export interface NeowsDay {
  date: string,
  asteroids: NeowsAsteroid[]
}

@Injectable({
  providedIn: 'root'
})
export class NeowsService {
    
    constructor() { }

    getFeed(): Observable<NeowsDay[]> {
        return of(FEED)
    }
}
