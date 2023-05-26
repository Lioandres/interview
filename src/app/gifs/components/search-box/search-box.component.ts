import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../Services/gifs.service';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }


  @ViewChild('localRef') txtTagInput!:ElementRef<HTMLInputElement>

  makeInput(){
    const a=this.txtTagInput.nativeElement.value
    this.gifsService.searchTag(a)
    this.txtTagInput.nativeElement.value=''

    console.log(a)
    console.log(this.gifsService.tagHistory)

   
  }

  

}
