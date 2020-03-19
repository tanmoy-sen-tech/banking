import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()

export class NotificationService {
    private subject = new Subject<any>();
    private rotersubject = new Subject<any>();
 

    /* Set the message in subject variable */
    sendMessage(message: any) {
        this.subject.next(message);
    }
    sendRoute(messager: any) {

      this.rotersubject.next(messager);
  }
  
    /* Clear the message from subject*/
    clearMessages() {
        this.subject.next();
        this.rotersubject.next();
        
    }

    /* Get the message from subject*/
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    getRoute(): Observable<any> {
      return this.rotersubject.asObservable();
    }
  
}
