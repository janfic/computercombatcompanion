import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiComponent } from '../api/api.component';
import { StatData } from '../model/stat-data.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  data: string
  api: ApiComponent<StatData>

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.api = new ApiComponent<StatData>(this.http);
    this.api.getCallToURL("http://localhost:8080/stats").subscribe((data: any) => {this.data = JSON.stringify(data)})
  }

}
