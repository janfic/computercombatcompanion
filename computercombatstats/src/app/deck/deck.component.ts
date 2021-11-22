import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiComponent } from '../api/api.component';
import { DeckData } from '../model/deck-data.model';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {

  id: number
  deckData: DeckData
  api: ApiComponent<DeckData>

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((route: ParamMap) => {
      var id = route.get("id");
      if (id) {
        this.id = +id;
      }
    });
    this.api = new ApiComponent(this.http)
    this.api.getCallToURL("http://localhost:8080/deck/" + this.id).subscribe((data: any)=>{this.deckData = data})
  }
}
