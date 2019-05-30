import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationEntrepreneurComponent } from './component/creation-entrepreneur/creation-entrepreneur.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EntrepreneurService } from './service/entrepreneur.service';

@NgModule({
  declarations: [
    AppComponent,
    CreationEntrepreneurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    EntrepreneurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
