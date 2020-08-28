import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InsightSol } from './insight-sol';
import { Observable } from 'rxjs';
import { API_KEY } from '../app.config';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class InsightService {

    feedurl = 'http://api.nasa.gov/insight_weather/'

    constructor(private http: HttpClient) {}

    getData(): Observable<InsightSol> {
        // Build parameters
        let options = {
            params: new HttpParams()
                .set('api_key', API_KEY)
                .set('feedtype', 'json')
                .set('ver', '1.0')
        }

        // Return API Call
        return this.http.get(this.feedurl, options)
            .pipe(
                map(body => {
                    // This code is real jank
                    let latest = body['sol_keys']
                        .reduce(
                            (mx:string, key:string):string => key > mx ? key : mx
                        )
                    latest = body[latest]
                    return latest
                })
            )
    }
}
