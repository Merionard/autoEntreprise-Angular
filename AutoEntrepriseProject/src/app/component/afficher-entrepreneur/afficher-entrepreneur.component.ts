import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entrepreneur } from 'src/model/Entrepreneur';
import { EntrepreneurService } from 'src/app/service/entrepreneur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-afficher-entrepreneur',
  templateUrl: './afficher-entrepreneur.component.html',
  styleUrls: ['./afficher-entrepreneur.component.css']
})
export class AfficherEntrepreneurComponent implements OnInit {

  private entrepreneur : Entrepreneur;
  private entrepreneurSubscritpion : Subscription;
  private afficherFormulaireDeclarationCa : boolean = false;

  constructor(private entrepreneurService:EntrepreneurService) { }

  ngOnInit() {
    this.entrepreneurSubscritpion = this.entrepreneurService.entrepreneurSubject.subscribe(
      (entrepreneur:Entrepreneur)=>{
        this.entrepreneur=entrepreneur;
      }
    );
    this.entrepreneurService.emitEntrepreneurSubject();
  }

   isAucuneEntreprise(){
    return this.entrepreneur.getEntreprise()==null;  
  }

  isEcheanceNonDeclare(){
    return true;
  }

  onClickDeclarationCa(){
    this.afficherFormulaireDeclarationCa=true;
  }



}
