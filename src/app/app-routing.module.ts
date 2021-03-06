import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component'

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dash', component: DashboardComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
