import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild('localRef') txtTagInput!:ElementRef<HTMLInputElement>

  makeInput(){
    const a=this.txtTagInput.nativeElement.value
    console.log(a)


  }

}
