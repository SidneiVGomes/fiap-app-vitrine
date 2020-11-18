import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsLetterModel } from '../models/newsletter.model';

@Injectable({
  providedIn: 'root'
})
export class PublishObserverService {

  private newsletterSubject = new BehaviorSubject(null);
  newsletterObserver = this.newsletterSubject.asObservable();

  constructor() { }

  changePublish(_newsletter: NewsLetterModel){
    this.newsletterSubject.next(_newsletter);
  }
}