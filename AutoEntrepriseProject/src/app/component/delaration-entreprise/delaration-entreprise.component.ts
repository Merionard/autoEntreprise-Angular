import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Entreprise } from 'src/model/Entreprise';
import { EntrepriseService } from 'src/app/service/entreprise.service';

@Component({
  selector: 'app-delaration-entreprise',
  templateUrl: './delaration-entreprise.component.html',
  styleUrls: ['./delaration-entreprise.component.css']
})
export class DelarationEntrepriseComponent implements OnInit {

  private entreprise:Entreprise;
 @Input() private idEntrepreneur: number;

  constructor(private entrepriseService:EntrepriseService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.entreprise=new Entreprise(null,null,null,null,null,null,null,null,null);
    this.entreprise.setDateDebut(form.value['dateDebut']);
    this.entreprise.setSiret(form.value['siret']);
    this.entreprise.setTypeActivite(form.value['typeActivite']);
    this.entreprise.setIsBeneficiaireArce(form.value['siArce']);
    this.entrepriseService.saveEntrepriseToserver(this.entreprise,this.idEntrepreneur);
    console.log(this.entreprise.getIsBeneficiaireArce());
  }

}
