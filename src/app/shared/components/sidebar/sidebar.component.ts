import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/Services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

 get tagHistory():string[]{

  return this.gifsService.tagHistory  
 }

 showGifTag(tag:string):void{
  this.gifsService.searchTag(tag)
 }
}
