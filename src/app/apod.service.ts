import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApodResponse } from './apod-response';
import { API_KEY } from './app.config';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApodService {
    feedurl = 'https://api.nasa.gov/planetary/apod'
  
    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}
  
    getData(): Observable<ApodResponse> {
        // Get options
        let options = {
            params: new HttpParams()
                .set('api_key', API_KEY)
        }

        // Update url
        return this.http.get(this.feedurl, options)
            .pipe<ApodResponse>(
                map<any, ApodResponse>(
                    body => ({
                        ...body,
                        url: this.sanitizer.bypassSecurityTrustResourceUrl(body.url)
                    })
                )
            )
    }
}
