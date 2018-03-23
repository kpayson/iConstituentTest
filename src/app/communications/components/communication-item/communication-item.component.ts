import { Input,Output, EventEmitter,Component, OnInit } from '@angular/core';
import { CommunicationStatus, AlertType, CommunicationItem } from '../../models/communicationItem';


@Component({
  selector: 'app-communication-item',
  templateUrl: './communication-item.component.html',
  styleUrls: ['./communication-item.component.scss']
})
export class CommunicationItemComponent implements OnInit {

  constructor() { }
  @Input() message:CommunicationItem
  @Input() isBundle:boolean
  
  @Output() messageSelectChange = new EventEmitter<any>();

  ngOnInit() {
  }

  private messageSelected($event) {
    var messageCheckState = {
      id:this.message.id,
      status:$event.checked  
    }
    this.messageSelectChange.emit(messageCheckState);
  }

  private getAlertClass(alert:AlertType) {
    switch(alert) {
      case AlertType.Warning:
        return "alert-warning";
      case AlertType.Star:
        return "alert-star";
      case AlertType.Request:
        return "alert-request";
      default:
        return "";
    }
  }

  private getAlertIcon(alert:AlertType) {
    switch(alert) {
      case AlertType.Warning:
        return "warning";
      case AlertType.Star:
        return "star";
      case AlertType.Request:
        return "person";
      default:
        return "";
    }
  }



}
