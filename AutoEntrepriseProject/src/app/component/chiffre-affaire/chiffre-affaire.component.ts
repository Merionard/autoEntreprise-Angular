import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChiffreAffaire } from 'src/model/ChiffreAffaire';
import * as moment from 'moment'

@Component({
  selector: 'app-chiffre-affaire',
  templateUrl: './chiffre-affaire.component.html',
  styleUrls: ['./chiffre-affaire.component.css']
})
export class ChiffreAffaireComponent implements OnInit {

  private chiffreAffaire : ChiffreAffaire = new ChiffreAffaire();
  private dateMoisPrecedent =moment().subtract(1, 'months').format('MMMM');

  constructor() {
   }

  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.chiffreAffaire.setMontant(form.value['montantCa']);
    this.chiffreAffaire.setAnnee(moment().year());
    this.chiffreAffaire.setMois(moment().subtract(1, 'months').month());


  }

}
