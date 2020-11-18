import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsLetter } from 'src/app/models/newsletter.model';
import { NewsletterService } from 'src/app/services/newsletter.service';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css'],
})
export class ListCardsComponent implements OnInit {
  newslettersList: Observable<NewsLetter[]>;

  constructor(
    private _newsLetterService: NewsletterService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.newslettersList = this.getNewsletters();
  }

  getNewsletters() {
    return this._newsLetterService.getNewsletters();
  }

  refreshListCards(_refresh: boolean) {
    if (_refresh) {
      this.ngOnInit();
      this.router.navigateByUrl('/');
    }
  }
}
