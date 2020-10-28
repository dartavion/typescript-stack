import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '@prisma/client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  post(payload: Post) {
    return this.httpClient.post<Post>('/api/post', {...payload})
  }

  get(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('/api/feed');
  }

  filter(payload): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`/api/filtered-posts/${payload}`)
  }
}
