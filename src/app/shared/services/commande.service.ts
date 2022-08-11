import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private urlc:string = "http://localhost:8000/api/clients"
  constructor(private http:HttpClient) { }












}
