import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { MainServiceService } from './main-service.service';
import { simpleJoke } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  choosenJoke!: simpleJoke;

  constructor(private apiService: MainServiceService){}

  ngOnInit(): void {
    this.apiService.getOneJoke().subscribe(val => this.choosenJoke = val);
    this.apiService._choosenJoke$.subscribe(val => {
      this.apiService.getJokeFromCategory(val).subscribe((val)=> this.choosenJoke = val)
    })
    this.apiService._randomisedJoke$.pipe(
      tap(() => {
        this.apiService.getOneJoke().subscribe(val => this.choosenJoke = val)
      })
    ).subscribe()
  }
  drawJoke(): void {
    this.apiService.getOneJoke().subscribe(val => this.choosenJoke = val)
  }
}
