import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TaskComponent } from './task/task.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:AppComponent},
  {path:'task',component:TaskComponent},
  {path:'post',component:PostComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
