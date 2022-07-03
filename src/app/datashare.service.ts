import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatashareService {
  jsonData = '../assets/data.json';

  constructor(private http: HttpClient) {}

  dataLoad() {
    return this.http.get(this.jsonData);
  }
}
