import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLetterDTO } from '../models/newsletter-dto.model';
import { NewsLetterModel } from '../models/newsletter.model';

const urlAPI = 'http://localhost:3000/newsletter/';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _httpClient: HttpClient) {}

  public getNewsletters(): Observable<NewsLetterModel[]> {
    return this._httpClient.get<NewsLetterModel[]>(urlAPI);
  }

  public postNewsletters(_newsLetter: NewsLetterModel): Observable<NewsLetterModel> {
    return this._httpClient.post<NewsLetterModel>(
      urlAPI,
      _newsLetter,
      this.httpOptions
    );
  }

  public putNewsletters(_newsLetter: NewsLetterModel): Observable<NewsLetterModel> {
    let newsletterDTO = new NewsLetterDTO();

    newsletterDTO.establishmentName = _newsLetter.establishmentName;
    newsletterDTO.establishmentCategory = _newsLetter.establishmentCategory;
    newsletterDTO.title = _newsLetter.title;
    newsletterDTO.message = _newsLetter.message;

    return this._httpClient.put<NewsLetterModel>(
      urlAPI + _newsLetter._id,
      newsletterDTO,
      this.httpOptions
    );
  }

  public delete(_id: string): Observable<NewsLetterModel> {
    return this._httpClient.delete<NewsLetterModel>(
      urlAPI + _id,
      this.httpOptions
    );
  }
}