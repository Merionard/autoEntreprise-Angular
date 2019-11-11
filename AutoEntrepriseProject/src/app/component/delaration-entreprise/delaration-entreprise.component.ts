import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Entreprise } from 'src/model/Entreprise';
import { EntrepriseService } from 'src/app/service/entreprise.service';
import { AfficherEntrepreneurComponent } from '../afficher-entrepreneur/afficher-entrepreneur.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delaration-entreprise',
  templateUrl: './delaration-entreprise.component.html',
  styleUrls: ['./delaration-entreprise.component.css']
})
export class DelarationEntrepriseComponent implements OnInit {


  constructor(private entrepriseService:EntrepriseService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){

  let entreprise = new Entreprise(null,null,null,null,null,null,null);

  entreprise.setDateDebut(form.value['dateDebut']);
  entreprise.setSiret(form.value['siret']);
  entreprise.setTypeActivite(form.value['typeActivite']);
  entreprise.setIsBeneficiaireArce(form.value['siArce']);
  this.entrepriseService.saveEntrepriseToserver(entreprise,Number(this.route.snapshot.paramMap.get('entrepreneurId')));
  this.router.navigate(['afficherEntreprise']);
  }
}
