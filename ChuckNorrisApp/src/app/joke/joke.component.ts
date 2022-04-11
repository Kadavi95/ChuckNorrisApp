import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { simpleJoke } from '../main-service.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit, AfterViewInit {
  @Input() choosenJoke!: simpleJoke;
  constructor() {}

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log('To jest choosenJoke z JokeComponent' + this.choosenJoke);
  }
}
