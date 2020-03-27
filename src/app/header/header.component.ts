import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MarvelAPIService } from './service/marvel-api.service';

@Component({
  selector: 'api-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() private charactersData = new EventEmitter<any[]>();

  public searchForm: FormGroup;
  public searchFor: string
  public characters: any[];

  constructor(private marvelAPI: MarvelAPIService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateSearchForm();
  }

  private generateSearchForm(): void {
    this.searchForm = this.fb.group({
      search: [null, Validators.required]
    });
  }

  public getCharacters(character: string = null): void {
    character ? this.searchForm.get('search').setValue(character) : null
    character ? this.searchFor = character : this.searchFor = this.searchForm.get("search").value;

    this.searchFor ? this.searchFor = this.searchFor.toLowerCase().trim() : this.searchFor = ''

    this.marvelAPI.getCharacters(this.searchFor).subscribe(
      characters => this.characters = [...characters],
      err => this.characters = [],
      () => this.onGetCharacters()
    );
  }

  public onGetCharacters(): void {
    this.charactersData.emit(this.characters)
  }
}
