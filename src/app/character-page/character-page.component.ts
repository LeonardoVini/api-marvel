import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'api-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {

  public characters: any[] = []

  constructor() {}

  ngOnInit(): void {
  }

  public setCharacters(event): void {
    this.characters = event
  }
}
