import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MastheadComponent } from './components/masthead/masthead.component';
import { LogoComponent } from './components/logo/logo.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddBitComponent } from './components/add-bit/add-bit.component';
import { AllBitsComponent } from './components/all-bits/all-bits.component';
import { BitComponent } from './components/bit/bit.component';
import { BigBitsComponent } from './components/big-bits/big-bits.component';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    LogoComponent,
    MessagesComponent,
    AddBitComponent,
    AllBitsComponent,
    BitComponent,
    BigBitsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
