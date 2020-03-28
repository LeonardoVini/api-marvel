import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild("hero", { static: false }) protected hero: ElementRef;

  protected heros: string[] = [
    "black_panther",
    "black_widow",
    "captain_america",
    "doctor_strange",
    "hulk",
    "iron_man",
    "silver_surfer",
    "spider_man",
    "thanos",
    "thor",
    "vision",
    "wolwerine",
    "deadpool_1",
    "deadpool_2",
    "gambit",
    "punisher",
    "cyclops",
    "cable",
    "magneto",
    "apocalypse",
    "colossus",
    "ultron",
    "night_crawer",
    "rogue",
    "phonix",
    "warlock",
    "gleen_stacy",
    "storm",
    "drax",
    "spider_woman",
    "spider_girl",
    "miles_moralles",
    "warlock_2",
    "rocket",
    "rocket_groot",
    "venom",
    "carnage",
    "carnage_venom",
    "hulk_burster",
    "galactus"
  ];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setInterval(() => {
      let hero: string = this.changeHeroImage();

      this.hero.nativeElement.src = `./assets/${hero}.png`;
      this.hero.nativeElement.alt = hero;
    }, 1500);
  }

  private changeHeroImage(): string {
    let hero_id: number = +localStorage.getItem("hero_id");
    let next_hero_id: number = hero_id + 1;
    let next_hero: string;

    if (next_hero_id > this.heros.length - 1) {
      next_hero = this.heros[0];
      localStorage.setItem("hero_id", "0");
    } else {
      next_hero = this.heros[next_hero_id];
      localStorage.setItem("hero_id", next_hero_id.toString());
    }

    return next_hero;
  }
}
