import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-last-stage',
  templateUrl: './last-stage.component.html',
  styleUrls: ['./last-stage.component.scss'],
})
export class LastStageComponent implements OnInit {
  wholeMergetData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const wholeMergetDataParam =
      this.route.snapshot.queryParamMap.get('wholeMergetData');
    if (wholeMergetDataParam) {
      try {
        this.wholeMergetData = JSON.parse(wholeMergetDataParam);
        console.log(this.wholeMergetData); // Console log the merged form data here
      } catch (error) {
        console.error('Error parsing wholeMergetData JSON:', error);
      }
    }
  }
}
