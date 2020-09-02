import { Component, OnInit } from '@angular/core';
import { InsightSol } from '../insight-sol';
import { InsightService } from '../insight.service';

@Component({
    selector: 'app-insight',
    templateUrl: './insight.component.html',
    styleUrls: ['./insight.component.scss']
})
export class InsightComponent implements OnInit {
    available: boolean
    response: InsightSol
    
    constructor(private insight: InsightService) { }
    
    ngOnInit(): void {
        this.insight.getData()
            .subscribe(response => {
                this.available = true
                this.response = response
            },
            error => {
                this.available = false
            })
    }
}
