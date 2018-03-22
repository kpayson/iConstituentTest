import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-communications-app',
  template: `
<div  style="padding-left:10px;">
  <div>
    <h3>Communications</h3>
  </div>
  
    <mat-tab-group>
      <mat-tab label="INBOUND">
        <app-sidenav></app-sidenav>
      </mat-tab>
      <mat-tab label="SCANNED MAIL"></mat-tab>
      <mat-tab label="OUTBOUND"></mat-tab>
      <mat-tab label="SENT"></mat-tab>
      <mat-tab label="CONTENT LIBRARY"></mat-tab>
    </mat-tab-group>
    </div>
  `,
  styles: []
})
export class CommunicationsAppComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // iconRegistry.addSvgIconSet(
    //   sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }

  ngOnInit() {
  }

}
