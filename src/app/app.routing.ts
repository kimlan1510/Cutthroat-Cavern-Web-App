import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import { GameboardComponent } from './gameboard/gameboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes= [
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'landing-page/gameboard',
    component: GameboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
