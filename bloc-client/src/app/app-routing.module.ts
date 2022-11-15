import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogArticleComponent } from './blog-article/blog-article.component';

const routes: Routes = [
  {path:'',component:BlogArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
