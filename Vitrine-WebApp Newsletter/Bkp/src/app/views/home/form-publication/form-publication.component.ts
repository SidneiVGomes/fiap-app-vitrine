import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsLetter } from 'src/app/models/newsletter.model';
import { PublishObserverService } from 'src/app/services/publish-observer.service';

@Component({
  selector: 'app-form-publication',
  templateUrl: './form-publication.component.html',
  styleUrls: ['./form-publication.component.css'],
})
export class FormPublicationComponent implements OnInit {
  newsletter: NewsLetter;

  constructor(
    public _dialogRef: MatDialogRef<FormPublicationComponent>,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _publishObserver: PublishObserverService
  ) {}

  public newsletterForm = this._formBuilder.group({
    _id: [''],
    establishmentName: ['', Validators.required],
    establishmentCategory: ['', Validators.required],
    title: ['', Validators.required],
    message: ['', Validators.required],
  });

  ngOnInit(): void {
    let newsLetter = new NewsLetter();

    if (this.data.newsletter == null) {
      this.data.newsletter = newsLetter;
    }

    try {
      this.newsletterForm.setValue({
        _id: this.data.newsletter._id,
        establishmentName: this.data.newsletter.establishmentName,
        establishmentCategory: this.data.newsletter.establishmentCategory,
        title: this.data.newsletter.title,
        message: this.data.newsletter.message,
      });
    } catch (error) {}

    // Cria um observer para monitorar as alterações na publicação.
    this._publishObserver.newsletterObserver.subscribe(
      (publish) => (this.newsletter = publish)
    );
  }

  async onSubmit() {
    this._publishObserver.changePublish(this.newsletterForm.value);
    this.newsletterForm.reset();
  }

  close(): void {
    this.newsletterForm.reset();
  }
}