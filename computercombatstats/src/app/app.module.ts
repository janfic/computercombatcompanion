import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { DeckComponent } from './deck/deck.component';
import { CardComponent } from './card/card.component';
import { StatsComponent } from './stats/stats.component';
import { MatchComponent } from './match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { PlayerSearchComponent } from './player-search/player-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CardStatsComponent } from './card-stats/card-stats.component';
import { LoadingComponent } from './loading/loading.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeckStatsComponent } from './deck-stats/deck-stats.component';
import { BoardComponent } from './match/board/board.component';
import { ActiveCardComponent } from './active-card/active-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HomeComponent,
    DeckComponent,
    CardComponent,
    StatsComponent,
    MatchComponent,
    ApiComponent,
    PlayerSearchComponent,
    CardStatsComponent,
    LoadingComponent,
    NotfoundComponent,
    DeckStatsComponent,
    BoardComponent,
    ActiveCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
