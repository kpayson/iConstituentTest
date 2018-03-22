export enum CommunicationStatus {
    Active,
    PendingAgencyResponse
}

export enum AlertType {
    Warning,
    Star,
    Request
}

export class CommunicationItem {
    id: number;
    subject: string;
    title: string;
    sender: string;
    dateSent: string;
    newItemCount:number;
    totalItemCount:number;
    hasAttachment:boolean;
    tags: string[];
    statusAlerts: AlertType[];
    status: CommunicationStatus;
}

