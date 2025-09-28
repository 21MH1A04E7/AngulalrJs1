import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template.driven.form/template.driven.form.component';

import { RouterModule,Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const Routers: Routes = [
  {path: 'drivenForm', component: TemplateDrivenFormComponent},
  {path:'reactiveForm', component: ReactiveFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Routers),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
