import { Component, Input, OnInit } from '@angular/core';
import { Gifs } from '../../Interfaces/SearchResponse.interface';
import { throwError } from 'rxjs';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrls: ['./gifs-card.component.css']
})
export class GifsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(!this.gif) throw new Error('gif does not exist')
  }

  @Input('gifsAliasCard') gif!:Gifs
}
