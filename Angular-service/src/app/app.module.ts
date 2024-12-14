import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { Post2Component } from './post2/post2.component';
import { PostService } from './Services/post.service';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { CardStoreService } from './Services/card-store.service';


const router: Routes = [
  { path: 'post', component: PostComponent },
  { path: 'post2', component: Post2Component },
  { path: 'card1', component: Card1Component },
  { path: 'card2', component: Card2Component },
];
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post2Component,
    Card1Component,
    Card2Component,
  ],
  imports: [BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(router)
  ],
  providers: [
    provideClientHydration(), 
    PostService,
    CardStoreService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
