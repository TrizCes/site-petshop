import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API_PATH } from 'src/environments/environments';

import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  newUser (formSign: IUser[]){
    console.log('cadastrando novo usuario:');
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this._http.post<IUser>(`${API_PATH}/users`, formSign, {headers}).subscribe(
      () => console.log('Success'),
      (e: any) => console.error('Error:', e));
   }
}
