import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http:HttpClient
  )
   { }

makePetitionService(body:string){
  return this.http.get('url'+body)
  
}

}
