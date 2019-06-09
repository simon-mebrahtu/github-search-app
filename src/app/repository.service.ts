import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositoryComponent } from './repository/repository.component';
import { RepositorySearchResponse } from './repository-search-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  searchTerm: string;

  constructor(private http: HttpClient) { }

  searchRepositories(): RepositorySearchResponse{
    let response: RepositorySearchResponse

    this.http.get<RepositorySearchResponse>(`${environment.githubRepositoryBaseUrl}${this.searchTerm}`).toPromise().then(data => {
      response = data;
    })

    return response;
  }
}
