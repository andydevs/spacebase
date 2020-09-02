import { Component, OnInit } from '@angular/core';
import { ApodResponse } from '../apod-response';
import { ApodService } from '../apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

    available: boolean
    response: ApodResponse

    constructor(private apod: ApodService) { }
    
    ngOnInit(): void {
        this.apod.getData()
            .subscribe(response => {
                this.available = true
                this.response = response
            },
            error => {
                this.available = false
            })
    }
}
