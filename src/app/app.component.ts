import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  public characters: any[]

  constructor() {}

  ngOnInit(): void {
  }

  public setCharacters(event): void {
    this.characters = event
  }
}
