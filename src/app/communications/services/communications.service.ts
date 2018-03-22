import { Injectable } from '@angular/core';
import { CommunicationItem,AlertType, CommunicationStatus  } from '../models/communicationItem';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'q';


@Injectable()
export class CommunicationsService {


  private _bundles: BehaviorSubject<CommunicationItem[]>;
  private _individualMail: BehaviorSubject<CommunicationItem[]>;
  
  private dataStore: {
    bundles: CommunicationItem[],
    individualMail: CommunicationItem[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { bundles: [],  individualMail: []};
    this._bundles = new BehaviorSubject<CommunicationItem[]>([]);
    this._individualMail = new BehaviorSubject<CommunicationItem[]>([]);
  }

  get bundles(): Observable<CommunicationItem[]> {
    return this._bundles.asObservable();
  }

  get individualMail(): Observable<CommunicationItem[]> {
    return this._individualMail.asObservable();
  }

  private isSubstring(content,searchString) {
    return content.toLowerCase().indexOf(searchString.toLowerCase()) >= 0;
  }

  searchMessages(s:string) {
    var filteredBundles = this.dataStore.bundles.filter(x=> this.isSubstring(x.title,s) || this.isSubstring(x.subject,s))
    this._bundles.next(filteredBundles);

    var filteredIndividulaMail = this.dataStore.individualMail.filter(x=> this.isSubstring(x.title,s) || this.isSubstring(x.subject,s))
    this._individualMail.next(filteredIndividulaMail);
  }


  loadAll() {
    this.dataStore.bundles =
      [
        {     
          id: 1,
          subject: 'APHIS Petition',
          title: 'Etium et lacus tritique, Lorem ipsum sit amit dolor',
          sender: '',
          dateSent: 'various',
          newItemCount:20,        
          totalItemCount:209,
          hasAttachment:false,
          tags: ['LONGER TAG', 'TAG', 'ANOTHER TAG', 'TAG', 'TAG'],
          statusAlerts: [AlertType.Star],
          status: CommunicationStatus.Active
        },
        {     
          id: 2,
          subject: 'WPA',
          title: 'Docic vel elit sit amet magna ornare',
          sender: '',
          dateSent: 'various',
          newItemCount:60,        
          totalItemCount:182,
          hasAttachment:true,
          tags: ['LONGER TAG', 'TAG', 'ANOTHER TAG'],
          statusAlerts: [AlertType.Warning,AlertType.Request],
          status: CommunicationStatus.Active
        }];

        this.dataStore.individualMail =
        [
          {     
            id: 101,
            subject: 'Rosemarie Setterfield',
            title: 'Etium et lacus tritique, Lorem ipsum sit amit dolor',
            sender: '',
            dateSent: 'various',
            newItemCount:0,        
            totalItemCount:0,
            hasAttachment:false,
            tags: ['LONGER TAG', 'TAG', 'ANOTHER TAG', 'TAG', 'TAG'],
            statusAlerts: [AlertType.Star],
            status: CommunicationStatus.Active
          },
          {     
            id: 102,
            subject: 'Erica Romaquera',
            title: 'Docic vel elit sit amet magna ornare',
            sender: '',
            dateSent: 'various',
            newItemCount:0,        
            totalItemCount:0,
            hasAttachment:true,
            tags: ['LONGER TAG', 'TAG', 'ANOTHER TAG'],
            statusAlerts: [AlertType.Warning,AlertType.Request],
            status: CommunicationStatus.Active
          }];

        this._bundles.next(this.dataStore.bundles);
        this._individualMail.next(this.dataStore.individualMail);

    
  };


}
