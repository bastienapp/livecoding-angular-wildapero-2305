import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apero } from '../models/apero.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient
      .get<Apero[]>("http://localhost:8080/api/aperos");
  }
}
