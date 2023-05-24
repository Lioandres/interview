import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css']
})
export class PetitionComponent implements OnInit {

  constructor(private serv:ServicesService) {
    
   }

  load:string=''

  ngOnInit(): void {
  }

  makePetition (argument:string){
    console.log(argument)
    this.serv.makePetitionService(argument).subscribe((res:any)=>console.log(res))


  }

}
