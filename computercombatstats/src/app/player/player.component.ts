import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  username: string

  constructor(private route: ActivatedRoute) {
    this.username = "";
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var username = params.get("username");
      if(username) {
        this.username = username;
      }
    });
  }
}