import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'super-hero-list',
  templateUrl: './super-hero-list.component.html',
  styleUrls: ['./super-hero-list.component.css']
})
export class SuperHeroListComponent implements OnInit, OnChanges {

  @Input() public characters: any[];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }
}
