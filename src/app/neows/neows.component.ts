import { Component, OnInit } from '@angular/core';
import { NeowsDay, NeowsService } from './neows.service';

@Component({
  selector: 'app-neows',
  templateUrl: './neows.component.html',
  styleUrls: ['./neows.component.scss']
})
export class NeowsComponent implements OnInit {
    feed: NeowsDay[]

    constructor(public neows: NeowsService) { }

    ngOnInit(): void {
        this.neows.getFeed()
            .subscribe(feed => this.feed = feed)
    }
}
