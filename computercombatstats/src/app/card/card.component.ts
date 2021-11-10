import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  name: string;

  constructor(private route: ActivatedRoute) { this.name = "" }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route: ParamMap) =>{
      var name = route.get("name")
      if(name) {
        this.name = name.replace("_", " ");
      }
    })
  }

}
