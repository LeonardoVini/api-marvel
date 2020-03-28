import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public characters: any[]

  constructor() {}

  ngOnInit(): void {
  }

  public setCharacters(event): void {
    this.characters = event
  }
}
