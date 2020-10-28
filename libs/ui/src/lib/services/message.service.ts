import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '@prisma/client';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  post(payload: Post) {
    return this.httpClient.post<Post>('/api/post', {...payload})
  }

  get() {
    return this.httpClient.get<any>('/api/filtered-posts/halloween');
  }
}
