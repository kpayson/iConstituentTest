import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CommunicationsOldAppComponent } from './communications-app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';




const routes: Routes = [
  {
    path: '', component: CommunicationsOldAppComponent,
    children: [ ]
  },
  { path: '**', redirectTo: '' }
];



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [

  ],
  declarations: [
    CommunicationsOldAppComponent,
    SidenavComponent, 
  ], 
  entryComponents: [

  ]
})
export class CommunicationsModule { }
