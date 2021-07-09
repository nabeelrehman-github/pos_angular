import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LoginRequest } from '../models/request/LoginRequest';
import { LoginResponse } from '../models/response/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  BASE_URL = 'http://192.168.2.103:8081/des'
  LOGIN = this.BASE_URL +'/authenticate'
  RECEIPT_PREFETCH = this.BASE_URL + "/prefetch/get"
  POST_RECEIPT = this.BASE_URL + "/receipt/post"
  EXPORT_RECEIPT = this.BASE_URL + "/report/export"

  authSubject = new Subject<boolean>();
  modalMessageSubject = new Subject<string>();
  modalTypeSubject = new Subject<string>();
  constructor(
    private http:HttpClient
  ) { }

  authorizeLogin(user:LoginRequest):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.LOGIN,user);
  }


  setAuthentication(data:boolean){
    this.authSubject.next(data);
  }

  getAuthentication():Observable<boolean>{
    return this.authSubject.asObservable();
  }

  setModal(message:string, type:string ){
    this.modalMessageSubject.next(message);
    this.modalTypeSubject.next(type);
  }

  getModalMessage():Observable<string>{
    return this.modalMessageSubject.asObservable();
  }
  getModalType():Observable<string>{
    return this.modalTypeSubject.asObservable();
  }
}
