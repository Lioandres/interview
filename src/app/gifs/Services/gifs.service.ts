import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchResponse } from '../Interfaces/SearchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http:HttpClient) {
    this.loadLocalStorage()
   }

public gifsList:Gifs[] =[]

 private _tagHistory:string[]=[]
 private serviceURL:string='https://api.giphy.com/v1/gifs'

 get tagHistory(){
  return [...this._tagHistory]
 }

 saveLocalStorage(){
  localStorage.setItem('tagHistory',JSON.stringify(this._tagHistory))
 }

 loadLocalStorage(){
  if(!localStorage.getItem('tagHistory')) return
  this._tagHistory=JSON.parse(localStorage.getItem('tagHistory')!)

  if(this._tagHistory.length===0) return
  this.searchTag( this._tagHistory[0]) 
}


 organizeHistory(tag:string){

  tag=tag.toLocaleLowerCase()
  
  if(this._tagHistory.includes(tag)) {
    this._tagHistory=this._tagHistory.filter(oldTag => oldTag!==tag)
  }

  this._tagHistory.unshift(tag)

  this._tagHistory=this._tagHistory.splice(0,10)


 }

 

 searchTag(newTag:string):void{
  if(newTag.length===0) return
  this.organizeHistory(newTag)

  const params=new HttpParams()
 .set ('api_key','weqa6HY5uwjuLYZyAFk5x9mevNMNEDM7')
 .set ('q',newTag)
 .set ('limit', '10')

  this.http.get<SearchResponse>(`${this.serviceURL}/search`,{params:params})
    .subscribe(resp=>
      this.gifsList=resp.data)

 this.saveLocalStorage()
 }
}
