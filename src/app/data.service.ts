import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AddForms, Setting } from './models/models';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor( private http: HttpClient,) {
   
   }

  dataUrl='../assets/data/';

cards=[]

  getmenu(path): Observable<any> {
   
    let url = this.dataUrl + path;
    // console.log(url);
     return   this.http.get<any>(url);
  }

  getsetting(path): Observable<Setting> {
   
    let url = this.dataUrl + path;
    // console.log(url);
     return   this.http.get<Setting>(url);
  }

  getfooter(path): Observable<Setting> {
   
    let url = this.dataUrl + path;
    // console.log(url);
     return   this.http.get<Setting>(url);
  }
  getist(path): Observable<string> {
   
    let url = this.dataUrl + path;
    // console.log(url);
     return   this.http.get<string>(url);
  }
  getuser(path): Observable<any> {
   
    let url = this.dataUrl + path;
    // console.log(url);
     return   this.http.get<any>(url);
  }

  getcard(path): Observable<any> {
   
    let url = this.dataUrl + path;
    // console.log(url);
     return   this.http.get<any>(url);
  }

  getform(path): Observable<AddForms> {
   
    let url = this.dataUrl + path;
    
     return   this.http.get<AddForms>(url);
  }

  getpie(path): Observable<any> {
   
    let url = this.dataUrl + path;
    
     return   this.http.get<any>(url);
  }

}
