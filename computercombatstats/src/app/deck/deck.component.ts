import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

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
