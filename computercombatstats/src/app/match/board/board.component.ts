import { Component, Input, OnInit } from '@angular/core';

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
  
  moveIndex: number = 0;
  boardStateIndex: number = 0;
  @Input() moves: any;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  changeMove(i: number) {
    this.moveIndex += i;
  }
}
