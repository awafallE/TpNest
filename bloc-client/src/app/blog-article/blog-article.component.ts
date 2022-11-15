import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogArticleService } from '../blog-article.service';
import { Article} from '../model/article';
@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.css']
})
export class BlogArticleComponent implements OnInit {

blogArticle :Article[];
  constructor( private blogService:BlogArticleService) { }

  ngOnInit(): void {
this.blogService.getArticle().subscribe((res:any) => {
    this.blogArticle=res.ArticleData;
    // console.log(res);
    });
   
     
    }
 
  }

