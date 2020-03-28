import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { SuperHeroComponent } from './hero/super-hero-list/super-hero/super-hero.component';
import { SuperHeroListComponent } from './hero/super-hero-list/super-hero-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperHeroListComponent,
    SuperHeroComponent,
    LoginComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
