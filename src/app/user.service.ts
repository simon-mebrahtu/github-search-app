import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { UserSearchResponse } from './user-search-response';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type':  'application/json',
    'Authorization': `${environment.githubUsername}:${environment.githubToken}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  searchUsers(searchTerm: string): UserSearchResponse {
    let response: UserSearchResponse

    this.http.get<UserSearchResponse>(`${environment.githubUserBaseUrl}${searchTerm}`, httpOptions).toPromise().then( data => {
      response = data;
    });

    return response;
  }
}
