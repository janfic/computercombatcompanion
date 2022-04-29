import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ApiComponent } from '../api/api.component';
import { CardData } from '../model/card-data.model';

@Component({
  selector: 'app-active-card',
  templateUrl: './active-card.component.html',
  styleUrls: ['./active-card.component.scss']
})
export class ActiveCardComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() activeCard: any;
  @Input() reversed: boolean;
  card: CardData;
  api: ApiComponent<CardData>;

  ngOnInit(): void {
    this.api = new ApiComponent<CardData>(this.http);
    this.api.getCallToURL("http://localhost:8080/card/" + this.activeCard.id).subscribe((data: any)=>{ this.card = data})
  }

}
