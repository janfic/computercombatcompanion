import { Component, OnInit } from '@angular/core';

const COLOR_TO_TEXTURE: any = {
  1: "cpu",
  2: "ram",
  3: "storage",
  4: "network",
  5: "bug",
  6: "power"
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  readonly colorToTexture = COLOR_TO_TEXTURE;
  
  matchData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
