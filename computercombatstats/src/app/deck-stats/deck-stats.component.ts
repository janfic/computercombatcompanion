import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiComponent } from '../api/api.component';

export class DeckStats {
  deck_stats: any[]
}

@Component({
  selector: 'app-deck-stats',
  templateUrl: './deck-stats.component.html',
  styleUrls: ['./deck-stats.component.scss']
})
export class DeckStatsComponent implements OnInit {

  deckStats: DeckStats;
  api: ApiComponent<DeckStats>

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.api = new ApiComponent(this.http);
    this.api.getCallToURL("http://localhost:8080/decks").subscribe((data: any) => { this.deckStats = data })
  }

}
