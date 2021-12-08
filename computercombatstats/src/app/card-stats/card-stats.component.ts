import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiComponent } from '../api/api.component';
import { CardData } from '../model/card-data.model';
import { PlayerData } from '../model/player-data.model';

export class CardStats {
  card_stats: CardStat[]
}

export class CardStat {
  card: CardData;
  matches: number
  wins: number
}

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.scss']
})
export class CardStatsComponent implements OnInit {

  cardStats: CardStats;
  api: ApiComponent<CardStats>

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.api = new ApiComponent<CardStats>(this.http);
    this.api.getCallToURL("http://localhost:8080/card").subscribe((data: any) => { this.cardStats = data;})
  }

}
