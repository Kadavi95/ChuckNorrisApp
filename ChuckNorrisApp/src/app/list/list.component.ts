import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  arrayOfCategories!: string []
  constructor(private mainService: MainServiceService) { }

  ngOnInit(): void {
    this.mainService.getListOfCategories().subscribe(categories => this.arrayOfCategories = categories)
  }
  showCategory(category: string){
    console.log('List Component TS wartość category: ' + category)
    this.mainService._choosenJoke$.next(category)
  }

}
