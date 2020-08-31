import { Component, OnInit } from '@angular/core';
import { ApodResponse } from '../apod-response';
import { ApodService } from '../apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

    response: ApodResponse

    constructor(private apod: ApodService) { }
    
    ngOnInit(): void {
        this.apod.getData()
            .subscribe(response => this.response = response)
    }
}
