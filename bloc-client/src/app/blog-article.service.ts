import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,map} from 'rxjs';
import { Article } from './model/article';


@Injectable({
  providedIn: 'root'
})
export class BlogArticleService {
;
  constructor(private httpClient: HttpClient) { }

getArticle():Observable <Article[]> {

  return this.httpClient.get<Article[]>('http://localhost:3000/article/?format=json');
 

}

}
