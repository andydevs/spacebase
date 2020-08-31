import { Component, OnInit } from '@angular/core';
import { InsightSolResponse } from '../insight-sol';
import { InsightService } from '../insight.service';

@Component({
    selector: 'app-insight',
    templateUrl: './insight.component.html',
    styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {
    response: InsightSolResponse
    
    constructor(private insight: InsightService) { }
    
    ngOnInit(): void {
        this.insight.getData()
            .subscribe(response => this.response = response)
    }
}
