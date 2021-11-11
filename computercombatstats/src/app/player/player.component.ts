import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

export class PlayerData {
  name: string
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  username: string;
  data: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var username = params.get("username");
      if (username) {
        this.username = username;
      }
    });
    this.http.get<PlayerData>("http://localhost:8080/player/" + this.username).subscribe(data => { this.data = JSON.stringify(data) });
  }
}