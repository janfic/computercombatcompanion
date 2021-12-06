import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss']
})
export class PlayerSearchComponent implements OnInit {

  searchValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.searchValue = event.target.value;
  }

  search() {

  }

}
