import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entrepreneur } from 'src/model/Entrepreneur';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable() 
export class EntrepreneurService {
  private entrepreneur : Entrepreneur;
  entrepreneurSubject  = new Subject<Entrepreneur>();
  constructor(private httpClient : HttpClient) { }

  emitEntrepreneurSubject(){
    this.entrepreneurSubject.next(this.entrepreneur);
  }

  saveEntrepreneurToServer(entrepreneur:Entrepreneur) {
    this.entrepreneur=entrepreneur;
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
      this.emitEntrepreneurSubject();
}
}
