import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NewsLetter } from 'src/app/models/newsletter.model';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { PublishObserverService } from 'src/app/services/publish-observer.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { FormPublicationComponent } from '../form-publication/form-publication.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public newsletterInitial: NewsLetter;
  private newsletterChanged: NewsLetter;

  constructor(
    private _newsletterService: NewsletterService,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _publishObserver: PublishObserverService
  ) {}

  ngOnInit(): void {
    // Cria um observer para monitorar as alterações no card de publicações.
    this._publishObserver.newsletterObserver.subscribe(
      (publish) => (this.newsletterChanged = publish)
    );
  }

  @Input()
  set news(_newsletter: NewsLetter) {
    this.newsletterInitial = _newsletter;
  }

  @Output() changedItem = new EventEmitter<boolean>();

  deleteCard(_newsletter: NewsLetter) {
    // Popup para confirmação da exclusão.
    const dialogRef = this._dialog.open(DialogComponent, {
      data: { newsletter: _newsletter },
      minWidth: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this._newsletterService
          .delete(_newsletter._id)
          .subscribe((response) => {
            this._snackBar.open('Notícia excluída com sucesso!', '', {
              duration: 2000,
              panelClass: ['snackBar-custom-sucess'],
            });

            // Dispara um evento avisando que houve alteração no card.
            this.changedItem.emit(true);
          });
      }
    });
  }

  openFormEditNewsletter(_newsletter: NewsLetter) {
    const dialogRef = this._dialog.open(FormPublicationComponent, {
      data: { newsletter: _newsletter },
      minWidth: '500px',
    });

    dialogRef.afterClosed().subscribe(async (resultForm) => {
      if (this.newsletterChanged != null && resultForm) {
        this._newsletterService
          .putNewsletters(this.newsletterChanged)
          .subscribe((response) => {
            this._snackBar.open(
              'Alteração da Notícia publicada com sucesso!',
              '',
              {
                duration: 2000,
                panelClass: ['snackBar-custom-sucess'],
              }
            );
          });

        // Dispara um evento avisando que houve alteração no card.
        this.changedItem.emit(true);
      }
    });
  }
}