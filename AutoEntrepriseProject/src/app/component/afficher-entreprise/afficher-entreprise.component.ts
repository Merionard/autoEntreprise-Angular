import { Component, OnInit } from '@angular/core';
import { Entreprise } from 'src/model/Entreprise';
import { Subscription } from 'rxjs';
import { EntrepriseService } from 'src/app/service/entreprise.service';
import { ChiffreAffaire } from 'src/model/ChiffreAffaire';

@Component({
  selector: 'app-afficher-entreprise',
  templateUrl: './afficher-entreprise.component.html',
  styleUrls: ['./afficher-entreprise.component.css']
})
export class AfficherEntrepriseComponent implements OnInit {
  private entreprise : Entreprise;
  private entrepriseSubscription : Subscription;

  constructor(private entrepriseService: EntrepriseService) { }

  ngOnInit() {
    this.entrepriseSubscription=this.entrepriseService.entrepriseSubject.subscribe(
      (entreprise:Entreprise)=>{
        this.entreprise=entreprise;
      }
    );
    this.entrepriseService.emitEntrepriseSubject();
  }

  }

  
