import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SuperHeroListComponent } from './super-hero-list/super-hero-list.component';
import { SuperHeroComponent } from './super-hero-list/super-hero/super-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperHeroListComponent,
    SuperHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
