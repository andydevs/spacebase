import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface NeowsAsteroid {
    name: string,
    estimated_diameter: {
        feet: {
            estimated_diameter_min: number,
            estimated_diameter_max: number
        }
    },
    is_potentially_hazardous_asteroid: boolean
}

@Injectable({
  providedIn: 'root'
})
export class NeowsService {

    feedurl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-08-27&end_date=2020-08-27&api_key=DEMO_KEY'
    
    constructor(private http: HttpClient) { }

    getFeed(): Observable<NeowsAsteroid[]> {
        return this.http.get(this.feedurl)
            .pipe(
                map( body => body['near_earth_objects'] ), // Get near earth objects
                map( neo => neo['2020-08-27'] ), // Get today
                // Rounding
                map( today => today.map(
                    asteroid => ({
                        ...asteroid,
                        estimated_diameter: {
                            feet: {
                                // This code is jank
                                estimated_diameter_min: Math.round(asteroid.estimated_diameter.feet.estimated_diameter_min),
                                estimated_diameter_max: Math.round(asteroid.estimated_diameter.feet.estimated_diameter_max)
                            }
                        }
                    })
                ))
            )
    }
}
