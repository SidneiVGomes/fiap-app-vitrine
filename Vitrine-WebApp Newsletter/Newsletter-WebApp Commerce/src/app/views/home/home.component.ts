import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsLetterModel } from 'src/app/models/newsletter.model';
import { NewsletterService } from 'src/app/services/newsletter.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PublishObserverService } from 'src/app/services/publish-observer.service';
import { FormPublicationComponent } from './form-publication/form-publication.component';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/Login.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public newsletterChanged: NewsLetterModel;
  public loginModel: LoginModel;

  constructor(
    public _dialog: MatDialog,
    private _newsletterService: NewsletterService,
    private _snackBar: MatSnackBar,
    private _publishObserver: PublishObserverService,
    private _router: Router
  ) {
    this._router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    // Cria um observer para monitorar as alterações no card de publicações.
    this._publishObserver.newsletterObserver.subscribe(
      (publish) => (this.newsletterChanged = publish)
    );

    this.loginModel = JSON.parse(sessionStorage.getItem('userActived'));
    console.log("Home - " + this.loginModel.nome);
  }

  openFormCreateNewsletter(_newsletter: NewsLetterModel): void {
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

            this._router.navigateByUrl('/home');
          });
      }
    });
  }

  exitApp(){
    sessionStorage.clear();
    this._router.navigate(['login']);
  }
}
