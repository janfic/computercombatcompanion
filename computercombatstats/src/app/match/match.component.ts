import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  id: number

  constructor(private route: ActivatedRoute) {
    this.id = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route: ParamMap) => {
      var id = route.get("id");
      if (id) {
        this.id = +id;
      }
    });
  }
}
