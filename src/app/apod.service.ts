import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from './apod-response';
import { API_KEY } from './app.config';

@Injectable({
    providedIn: 'root'
})
export class ApodService {
    feedurl = 'https://api.nasa.gov/planetary/apod'
  
    constructor(private http: HttpClient) {}
  
    getData(): Observable<ApodResponse> {
        let options = {
            params: new HttpParams()
                .set('api_key', API_KEY)
        }
        return this.http.get<ApodResponse>(this.feedurl, options)
    }
}
