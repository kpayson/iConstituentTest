import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CommunicationsService } from '../../services/communications.service';
import { CommunicationItem } from '../../models/communicationItem';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {


  private bundles:CommunicationItem[];
  private individualMail:CommunicationItem[];

  constructor(
    private route: ActivatedRoute,
    private service: CommunicationsService) { }

  ngOnInit() {

    this.service.bundles.subscribe(b => {
      this.bundles = b;
    });

    this.service.individualMail.subscribe(m => {
      this.individualMail = m;
    });

  }

  private messageSelectChange(idAndStatus:any) {
    //record
  }

}
