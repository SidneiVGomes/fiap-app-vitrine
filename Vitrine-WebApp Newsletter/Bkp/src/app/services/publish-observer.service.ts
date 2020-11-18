import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewsLetter } from '../models/newsletter.model';

@Injectable({
  providedIn: 'root'
})
export class PublishObserverService {

  private newsletterSubject = new BehaviorSubject(null);
  newsletterObserver = this.newsletterSubject.asObservable();

  constructor() { }

  changePublish(_newsletter: NewsLetter){
    this.newsletterSubject.next(_newsletter);
  }
}