import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts'},
  { path: 'posts', component: PostsComponent},
  { path: 'addPosts', component: AddPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
