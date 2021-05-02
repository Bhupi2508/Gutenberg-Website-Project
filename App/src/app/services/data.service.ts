import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  booksUrl = environment.booksUrl;

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  getMethod(url: string) {
    return this.http.get(url)
  }

  getSearchMethod(search: string, topic: string) {
    let url = this.booksUrl;

    if (search) {
      url = url + `${topic}&search=${search}`
    }

    return this.http.get(url)
  }

  provideMessage(message: string) {
    this.messageSource.next(message)
  }
}
