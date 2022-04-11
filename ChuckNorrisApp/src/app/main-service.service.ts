import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
export type simpleJoke = {
  icon_url : string,
  id : string,
  url : string,
  value : string
}
@Injectable({
  providedIn: 'root'
})

export class MainServiceService {
  private mainUrl = "https://api.chucknorris.io";

  constructor(private httpClient: HttpClient) { }

  public _choosenJoke$ = new Subject<string>();
  public _randomisedJoke$ = new Subject<string>();

  public getOneJoke(){
    return this.httpClient.get<simpleJoke>(`${this.mainUrl}/jokes/random`)
  }
  public getListOfCategories(){
    return this.httpClient.get<string[]>(`${this.mainUrl}/jokes/categories`)
  }
  public searchForJoke(query: string){
    return this.httpClient.get<simpleJoke>(`${this.mainUrl}/jokes/search?query=${query}`)
  }
  public getJokeFromCategory(category: string){
    console.log('Metoda getJokeFromCategory z value' + category)
    return this.httpClient.get<simpleJoke>(`${this.mainUrl}//jokes/random?category=${category}`)
  }
}
