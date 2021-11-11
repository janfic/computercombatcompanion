import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent<T> implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getCallToURL(url: string) {
    return this.http.get<T>(url);
  }
}
