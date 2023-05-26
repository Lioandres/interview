import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../Interfaces/SearchResponse.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('gifsAlias')  gifsInput:Gifs[]=[]

}
