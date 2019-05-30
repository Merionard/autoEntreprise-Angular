import { Component, OnInit } from '@angular/core';
import { Entrepreneur } from 'src/model/Entrepreneur';
import { NgForm } from '@angular/forms';
import { EntrepreneurService } from 'src/app/service/entrepreneur.service';

@Component({
  selector: 'app-creation-entrepreneur',
  templateUrl: './creation-entrepreneur.component.html',
  styleUrls: ['./creation-entrepreneur.component.css']
})
export class CreationEntrepreneurComponent implements OnInit {

  private entrepreneur : Entrepreneur;

  constructor(private entrepreneurService:EntrepreneurService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.entrepreneur=new Entrepreneur();
    this.entrepreneur.getCivilite().setNom(form.value['nom']);
    this.entrepreneur.getCivilite().setPrenom (form.value['prenom']);
    this.entrepreneur.setLogin(form.value['login']);
    this.entrepreneur.setPassword(form.value['password']);
    this.entrepreneurService.saveEntrepreneurToServer(this.entrepreneur);
    
  }

}
