import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameboardComponent } from './gameboard/gameboard.component';
const appRoutes: Routes = [
  {
    path: '',
    component: GameboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
