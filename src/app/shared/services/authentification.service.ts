import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

    private urllogin="http://localhost:8000/api/login"
    private urlclient="http://localhost:8000/api/clients"

    connexion(koni:any){
      return this.http.post<any>(this.urllogin,koni)

    }

    utilisateur(koni:any){
      return this.http.post<any>(this.urlclient,koni)
    }

    getDecodedAccessToken(token: string): any {
      try {
        return jwt_decode(token);

      } catch(Error) {
        
        return null;
      }
    }

}
   