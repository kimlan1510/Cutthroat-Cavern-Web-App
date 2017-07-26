import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import { GameboardComponent } from './gameboard/gameboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RulesComponent } from './rules/rules.component';

const appRoutes: Routes= [
  {
    path: '',
    component: RulesComponent
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'landing-page/gameboard',
    component: GameboardComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
