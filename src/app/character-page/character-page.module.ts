import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPageComponent } from './character-page.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character-list/character/character.component';

import { ErrorPageComponent } from './error-page/error-page.component';

import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    CharacterPageComponent,
    CharacterListComponent,
    CharacterComponent,
    ErrorPageComponent
  ],
  imports: [CommonModule, HeaderModule],
  exports: [],
})
export class CharacterPageModule { }
