import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLetterDTO } from '../models/newsletter-dto.model';
import { NewsLetter } from '../models/newsletter.model';

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

  public getNewsletters(): Observable<NewsLetter[]> {
    return this._httpClient.get<NewsLetter[]>(urlAPI);
  }

  public postNewsletters(_newsLetter: NewsLetter): Observable<NewsLetter> {
    return this._httpClient.post<NewsLetter>(
      urlAPI,
      _newsLetter,
      this.httpOptions
    );
  }

  public putNewsletters(_newsLetter: NewsLetter): Observable<NewsLetter> {
    let newsletterDTO = new NewsLetterDTO();

    newsletterDTO.establishmentName = _newsLetter.establishmentName;
    newsletterDTO.establishmentCategory = _newsLetter.establishmentCategory;
    newsletterDTO.title = _newsLetter.title;
    newsletterDTO.message = _newsLetter.message;

    return this._httpClient.put<NewsLetter>(
      urlAPI + _newsLetter._id,
      newsletterDTO,
      this.httpOptions
    );
  }

  public delete(_id: string): Observable<NewsLetter> {
    return this._httpClient.delete<NewsLetter>(
      urlAPI + _id,
      this.httpOptions
    );
  }
}