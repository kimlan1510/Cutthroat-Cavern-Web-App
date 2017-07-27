//Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MdToolbarModule, MdTooltipModule } from '@angular/material';


//Firebase Imports
import { masterFirebaseConfig } from './firebase-api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Components Imports
import { AppComponent } from './app.component';

import { GameboardComponent } from './gameboard/gameboard.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { RulesComponent } from './rules/rules.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WinnerComponent } from './winner/winner.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    LandingPageComponent,
    LandingPageComponent,
    RulesComponent,
    HomeComponent,
    AboutComponent,
    WinnerComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
