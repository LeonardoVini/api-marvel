import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CharacterPageComponent } from './character-page/character-page.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'characters', component: CharacterPageComponent},
  { path: 'homepage', component: HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
