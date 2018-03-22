import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'communications', loadChildren: './communications/communications.module#CommunicationsModule' },
  { path: '**', redirectTo: 'communications' }
];


  //path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
