import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entreprise } from 'src/model/Entreprise';
import { Entrepreneur } from 'src/model/Entrepreneur';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
@Injectable() 
export class EntrepriseService {
  private entreprise:Entreprise;
  entrepriseSubject = new Subject<Entreprise>();

  constructor(private httpClient : HttpClient) { }

  emitEntrepriseSubject(){
    this.entrepriseSubject.next(this.entreprise);
  }

  saveEntrepriseToserver(entreprise:Entreprise, idEntrepreneur:number){
    this.httpClient
      .post('http://localhost:8080/AutoEntreprise/entreprise/'+idEntrepreneur,entreprise)
      .subscribe(
        (data:any) => {
          console.log('Enregistrement terminé !');
          this.entreprise=Entreprise.fromJson(data);
          this.emitEntrepriseSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      console.log('http://localhost:8080/AutoEntreprise/entreprise/'+idEntrepreneur);
      console.log(entreprise.getIsBeneficiaireArce());
      
  }
}
