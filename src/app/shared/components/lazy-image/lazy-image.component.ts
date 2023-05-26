import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: [
  ]
})
export class LazyImageComponent implements OnInit {
none: any;

  constructor() { }

  ngOnInit(): void {
   
    if(!this.src) throw new Error('url is required!')
  }

  @Input('src') src!:string

  @Input('alt') alt:string=''

  hasLoad:boolean=false

  onLoad(){
    setTimeout( ()=>
    this.hasLoad=true,500)
  }


}
