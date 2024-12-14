import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPipeComponent } from './basic-pipe/basic-pipe.component';
import { AppendPipe } from './Pipes/append.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { AppendCliPipe } from './Pipe/append-cli.pipe';
import { TextPipePipe } from './Pipe/text-pipe.pipe';

const routers:Routes=[
  {path:'basic-pipe',component: BasicPipeComponent},
  {path:'custom-pipe',component: CustomPipeComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    BasicPipeComponent,
    AppendPipe,
    CustomPipeComponent,
    AppendCliPipe,
    TextPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers)
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
