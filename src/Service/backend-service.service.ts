import { HttpClient } from '@angular/common/http';          // import the httpclient to make http requests to the backend server
import { Injectable } from '@angular/core';                 // already impoted - to handle the dependancies in this class
import { Observable } from 'rxjs';                          // import the observable to handle async operatioins
                                                            //Observable Operations- Promises, Observables, Subscribe, async/await syntax, and supports HttpClient for making HTTP requests

import { TutorialModel } from '../Model/TutorialModel';

@Injectable({
  providedIn: 'root',
})                                                          // by default
export class BackendServiceService {
  private baseUrl = 'http://localhost:8080/tutorial';       // url of the backend server

  constructor(private http: HttpClient) {}                  // creating an object 'http' for this backendservice class from the 'HTTPclient' module

  getAllTutorials(): Observable<TutorialModel[]> {
    return this.http.get<TutorialModel[]>(this.baseUrl);
  }

  getTutorials(title: String): Observable<TutorialModel[]> {
    return this.http.get<TutorialModel[]>(`${this.baseUrl}/${title}`);
  }

  postTutorial(tuto: TutorialModel): Observable<void> {
    return this.http.post<void>(this.baseUrl, tuto);
  }

  deleteTutorialById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);                     // the delete method doesn't takes the second value.
  }

  // method to get data from the backend server.   // method is of 'any' type under the observable
  // Observable - a stream of data or events that can be observed over time
}

