import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardStatsComponent } from './card-stats/card-stats.component';
import { CardComponent } from './card/card.component';
import { DeckComponent } from './deck/deck.component';
import { HomeComponent } from './home/home.component';
import { MatchComponent } from './match/match.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { PlayerComponent } from './player/player.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: "", component: PlayerSearchComponent},
  {path: "home", component: PlayerSearchComponent},
  {path: "player", component: PlayerSearchComponent},
  {path: "player/:username", component: PlayerComponent},
  {path: "card", component: CardStatsComponent},
  {path: "card/:name", component: CardComponent},
  {path: "deck/:id", component: DeckComponent},
  {path: "stats", component: StatsComponent},
  {path: "match/:id", component:MatchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
