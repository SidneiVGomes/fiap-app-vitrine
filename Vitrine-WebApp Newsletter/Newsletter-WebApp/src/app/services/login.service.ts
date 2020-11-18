import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
// import { LoginDTO } from '../models/Login-dto.model';
import { LoginModel } from '../models/Login.model';

// const urlAPI = 'https://petmagnet-api.herokuapp.com/API/colaboradores';
const urlAPI = 'http://localhost:8080/API/colaboradores';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };

  constructor(private _httpClient: HttpClient) {}

  public getLogin(_userName: string, _senha: string, _idEstabelecimento: string): Observable<LoginModel> {
    return this._httpClient.get<LoginModel>(urlAPI + '/login?' + 'eMail=' + _userName + '&senha=' + _senha)
      .pipe(retry(2), catchError(this.handleError));
  }

  public postLogin(_login: LoginModel): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>(urlAPI, _login, this.httpOptions);
  }

  public putLogin(_login: LoginModel): Observable<LoginModel> {
    // let LoginDTO = new LoginDTO();

    // LoginDTO.establishmentName = _login.establishmentName;
    // LoginDTO.establishmentCategory = _login.establishmentCategory;
    // LoginDTO.title = _login.title;
    // LoginDTO.message = _login.message;

    // return this._httpClient.put<Login>(
    //   urlAPI + _login._id,
    //   LoginDTO,
    //   this.httpOptions
    // );

    return null;
  }

  public delete(_id: string): Observable<LoginModel> {
    return this._httpClient.delete<LoginModel>(urlAPI + _id, this.httpOptions);
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    // console.log(errorMessage);
    return throwError(errorMessage);
  }
}
