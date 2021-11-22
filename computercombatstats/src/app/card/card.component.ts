import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiComponent } from '../api/api.component';
import { CardData } from '../model/card-data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  name: string;
  api: ApiComponent<CardData>
  cardData: CardData

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((route: ParamMap) =>{
      var name = route.get("name")
      if(name) {
        this.name = name.replace("_", " ");
      }
    });
    this.api = new ApiComponent<CardData>(this.http);
    this.api.getCallToURL("http://localhost:8080/card/" + this.name.replace(" ", "_")).subscribe((data: any)=>{ this.cardData = data})
  }

}
