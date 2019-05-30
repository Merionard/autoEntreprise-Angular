import { Component, OnInit } from '@angular/core';
import { Entrepreneur } from 'src/model/Entrepreneur';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creation-entrepreneur',
  templateUrl: './creation-entrepreneur.component.html',
  styleUrls: ['./creation-entrepreneur.component.css']
})
export class CreationEntrepreneurComponent implements OnInit {

  private entrepreneur : Entrepreneur;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.entrepreneur.civilite.nom = form.value['nom'];
    this.entrepreneur.civilite.prenom = form.value['prenom'];
    this.entrepreneur.login=form.value['login'];
  }

}
