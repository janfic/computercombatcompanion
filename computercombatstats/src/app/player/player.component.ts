import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiComponent } from '../api/api.component';
import { LoadingComponent } from '../loading/loading.component';
import { PlayerData } from '../model/player-data.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],

})
export class PlayerComponent implements OnInit {

  username: string;
  playerData: PlayerData;
  api: ApiComponent<PlayerData>

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var username = params.get("username");
      if (username) {
        this.username = username;
      }
    });
    this.api = new ApiComponent<PlayerData>(this.http);
    this.api.getCallToURL("http://localhost:8080/player/" + this.username).subscribe((data: any) => { this.playerData = data })
  }
}