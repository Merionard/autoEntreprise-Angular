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
    this.httpClient
      .post('http://localhost:8080/AutoEntreprise/entrepreneur/', entrepreneur)
      .subscribe(
        (data:any) => {
          console.log('Enregistrement terminé !');
          this.entrepreneur=Entrepreneur.fromJson(data);
          this.emitEntrepreneurSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      
}
getEntrepreneurByLogin(login:String){
  this.httpClient
    .get('http://localhost:8080/AutoEntreprise/entrepreneur/'+login)
    .subscribe(
      (data:any)=>{
        this.entrepreneur=Entrepreneur.fromJson(data);
        this.emitEntrepreneurSubject();
      },
      (error)=>{
        console.log('Erreur :  '+error);
      }
    );      
}

getEntrepreneurById(id:number){
  console.log("id entrepreneur ="+ id);
  this.httpClient
    .get('http://localhost:8080/AutoEntreprise/entrepreneurById/'+id)
    .subscribe(
      (data:any)=>{
        this.entrepreneur=Entrepreneur.fromJson(data);
        this.emitEntrepreneurSubject();
        console.log('http://localhost:8080/AutoEntreprise/entrepreneurById/'+id);
      },
      (error)=>{
        console.log('Erreur :  '+error);
      }
    );      
}

}
