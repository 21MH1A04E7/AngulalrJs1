import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { PostService } from './Services/post.service';

const router:Routes=[
  {path: 'post',component: PostComponent},
  {path: 'post2',component: Post2Component}
]
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router)
  ],
  providers: [
    provideClientHydration(),
    PostService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
