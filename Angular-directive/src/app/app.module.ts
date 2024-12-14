import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
import { Directive1Component } from './directive1/directive1.component';
import { ChangeDirective1Component } from './change-directive1/change-directive1.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { IfDirective2Component } from './if-directive2/if-directive2.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { Task1Component } from './task1/task1.component';

const routes:Routes=[
  {path:'',component: AppComponent},
  {path:'directive1',component:Directive1Component},
  {path:'change-directive1',component:ChangeDirective1Component},
  {path:'if-directive',component:IfDirectiveComponent},
  {path:'if-directive2',component:IfDirective2Component},
  {path:'switch-case',component:SwitchCaseComponent},
  {path:'ng-style',component:NgStyleComponent},
  {path:'ng-class',component:NgClassComponent},
  {path:'task1',component:Task1Component}
]
@NgModule({
  declarations: [
    AppComponent,
    Directive1Component,
    ChangeDirective1Component,
    IfDirectiveComponent,
    IfDirective2Component,
    SwitchCaseComponent,
    NgStyleComponent,
    NgClassComponent,
    Task1Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
