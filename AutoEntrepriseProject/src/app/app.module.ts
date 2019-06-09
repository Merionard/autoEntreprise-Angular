import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherEntrepreneurComponent } from './component/afficher-entrepreneur/afficher-entrepreneur.component';
import { CreationEntrepreneurComponent } from './component/creation-entrepreneur/creation-entrepreneur.component';
import { DelarationEntrepriseComponent } from './component/delaration-entreprise/delaration-entreprise.component';
import { EntrepreneurService } from './service/entrepreneur.service';


const appRoutes: Routes = [
  { path: 'creationEntrepreneur', component: CreationEntrepreneurComponent },
  { path: 'home', component: AfficherEntrepreneurComponent },
/*   { path: '', component: AppareilViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  {path: 'users', component:UserListComponent},
  { path: 'new-user', component: NewUserComponent },
  { path: '**', redirectTo: 'not-found' } */
];

@NgModule({
  declarations: [
    AppComponent,
    CreationEntrepreneurComponent,
    DelarationEntrepriseComponent,
    AfficherEntrepreneurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EntrepreneurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
