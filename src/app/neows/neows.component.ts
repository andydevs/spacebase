import { Component, OnInit } from '@angular/core';
import { NeowsAsteroid } from "./neows-asteroid";
import { NeowsService } from './neows.service';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.scss']
})
export class NeowsComponent implements OnInit {
    feed: NeowsAsteroid[]

    constructor(public neows: NeowsService) { }

    ngOnInit(): void {
        this.neows.getFeed()
            .subscribe(feed => this.feed = feed)
    }
}
