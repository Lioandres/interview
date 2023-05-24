import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PetitionComponent } from './petition/petition.component';
import { FormsModule } from '@angular/forms';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PetitionComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    GifsModule,
    SharedModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
