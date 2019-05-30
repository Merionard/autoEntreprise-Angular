import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrepreneur } from 'src/model/Entrepreneur';

@Injectable({
  providedIn: 'root'
})
@Injectable() 
export class EntrepreneurService {

  constructor(private httpClient : HttpClient) { }

  saveEntrepreneurToServer(entrepreneur:Entrepreneur) {
    this.httpClient
      .post('http://localhost:8080/AutoEntreprise/entrepreneur/', entrepreneur)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}
}
