import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class MarvelAPIService {
  private url_api = "https://gateway.marvel.com:443";
  private PUBLIC_KEY = "95e3a8534027f85593638500b19a9106"; // ed5accb8c7697714ac1dbf1c7584c3c0
  private HASH = "33c93aaf1ea327d3416f7ab1bcfe12c3";

  private imgPixels: string = "standard_xlarge";

  constructor(private http: HttpClient) {}

  public getCharacters(search: string): Observable<any> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("nameStartsWith", search);
    searchParams = searchParams.append("orderBy", "-modified");
    searchParams = searchParams.append("ts", "1");
    searchParams = searchParams.append("apikey", this.PUBLIC_KEY);
    searchParams = searchParams.append("hash", this.HASH);
    searchParams = searchParams.append("limit", "100");

    const url = `${this.url_api}/v1/public/characters`;

    return this.http
      .get<any>(url, { params: searchParams })
      .pipe(
        map(characters => {
          let charactersArray = [...characters.data.results]

          charactersArray.map(v => {
            v.thumbnail["full_path"] = `${v.thumbnail.path}/${this.imgPixels}.${v.thumbnail.extension}`
          })

          charactersArray.map(v => {
            v.description.trim() === "" ? (v.description = "No description") : null;
          });

          return charactersArray
        }),
      );
  }
}
