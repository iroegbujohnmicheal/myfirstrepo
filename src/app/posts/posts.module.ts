import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [PostsComponent, AddPostComponent, NavbarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class PostsModule { }
