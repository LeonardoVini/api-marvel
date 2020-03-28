import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'super-hero',
  templateUrl: './super-hero.component.html',
  styleUrls: ['./super-hero.component.css']
})
export class SuperHeroComponent implements OnInit, OnChanges {

  @Input() public character;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }
}
