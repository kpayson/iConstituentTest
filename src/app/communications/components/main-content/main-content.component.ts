import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
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


    // this.route.params.subscribe(params => {
    //   let id = params['id'];
    //   if (!id) id = 1;
    //   this.user = null;

    //   this.service.users.subscribe(users => {
    //     if (users.length == 0) return;

    //     setTimeout(() => {
    //       this.user = this.service.userById(id);
    //     }, 500);
    //   });

    //})
  }

  private messageSelectChange(idAndStatus:any) {
    //record
  }

}
