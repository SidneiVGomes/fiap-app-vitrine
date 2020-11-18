import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsLetter } from 'src/app/models/newsletter.model';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PublishObserverService } from 'src/app/services/publish-observer.service';
import { FormPublicationComponent } from './form-publication/form-publication.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public newsletterChanged: NewsLetter;

  constructor(
    public _dialog: MatDialog,
    private _newsletterService: NewsletterService,
    private _snackBar: MatSnackBar,
    private _publishObserver: PublishObserverService,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    // Cria um observer para monitorar as alterações no card de publicações.
    this._publishObserver.newsletterObserver.subscribe(
      (publish) => (this.newsletterChanged = publish)
    );
  }

  openFormCreateNewsletter(_newsletter: NewsLetter): void {
    const dialogRef = this._dialog.open(FormPublicationComponent, {
      data: { newsletter: _newsletter },
      minWidth: '500px',
    });

    dialogRef.afterClosed().subscribe((resultForm) => {
      if (this.newsletterChanged != null && resultForm) {
        this._newsletterService
          .postNewsletters(this.newsletterChanged)
          .subscribe((response) => {
            this._snackBar.open('Notícia publicada com sucesso!', '', {
              duration: 2000,
              panelClass: ['snackBar-custom-sucess'],
            });

            this.router.navigateByUrl('/');
          });
      }
    });
  }
}
