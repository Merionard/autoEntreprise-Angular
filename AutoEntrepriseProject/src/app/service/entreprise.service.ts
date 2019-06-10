import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable() 
export class EntrepriseService {

  constructor(private httpClient : HttpClient) { }
}
