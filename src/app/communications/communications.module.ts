import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommunicationsAppComponent } from './communications-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CommunicationsService } from './services/communications.service';
import { HttpClientModule } from '@angular/common/http';
import { CommunicationItemComponent } from './components/communication-item/communication-item.component';

const routes: Routes = [
  {
    path: '', component: CommunicationsAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CommunicationsService
  ],
  declarations: [
    CommunicationsAppComponent, 
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent, 
    CommunicationItemComponent
  ], 
  entryComponents: []
})
export class CommunicationsModule { }
