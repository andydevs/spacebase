import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_KEY } from "./app.config";
import { NeowsAsteroid } from "./neows-asteroid";

@Injectable({
  providedIn: 'root'
})
export class NeowsService {

    // Feed URL
    feedurl = 'https://api.nasa.gov/neo/rest/v1/feed'
    
    // Constructor
    constructor(private http: HttpClient) { }

    getFeed(): Observable<NeowsAsteroid[]> {
        // Get today's date
        let today = new Date().toISOString().split('T')[0]

        // Options
        let options = {
            params: new HttpParams()
                .set('start_date', today)
                .set('end_date', today)
                .set('api_key', API_KEY)
        }

        // Return feed observable
        return this.http.get(this.feedurl, options)
            .pipe(
                map( body => body['near_earth_objects'] ), // Get near earth objects
                map( neo => neo[today] ), // Get today
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
