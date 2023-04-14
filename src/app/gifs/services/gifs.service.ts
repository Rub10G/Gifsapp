import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey: string = 'zy1sUbkgp1LPxZX74L93khXYSwZg0kmu';

  private _historial: string [] = [];


  get historial(){
    
    return [...this._historial];
  }

  constructor(private http: HttpClient){}

  buscarGifs(query: string = ''){

    query = query.trim().toLocaleLowerCase();
    
    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);
    }

    this.http.get('api.giphy.com/v1/gifs/search?api_key=zy1sUbkgp1LPxZX74L93khXYSwZg0kmu&limit=10&q=dragon ball z')
      .subscribe( (resp: any) =>{
        console.log(resp.data);
      });

    
  }
}
