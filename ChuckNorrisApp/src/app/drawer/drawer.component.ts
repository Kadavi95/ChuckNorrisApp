import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {

  constructor(private apiService: MainServiceService) { }

  ngOnInit(): void {
  }

  drawJoke() {
    this.apiService._randomisedJoke$.next("new")
  }

}
