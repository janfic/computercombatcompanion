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

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HomeComponent,
    DeckComponent,
    CardComponent,
    StatsComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
