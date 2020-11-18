import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/Login.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  loginModel: LoginModel;
  loading: boolean = false;
  errorMessage: any;
  loginForm: FormGroup;

  constructor(private _router: Router,
              private _loginService: LoginService,
              private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginModel = JSON.parse(sessionStorage.getItem('userActived'));

    try {
      if (this.loginModel.idColaborador != '') {
        this._router.navigate(['home']);
      }
    } catch (error) {}

    // Cria o Form para entrada dos dados para conexão
    this.loginForm = this._formBuilder.group({
      userName: ['', Validators.required],
      senha: ['', Validators.required]
    }); 
  }

  validarAcesso(): void {
    console.log('Método validarAcesso');

    try {
      this._loginService.getLogin(
          this.loginForm.get('userName').value,
          this.loginForm.get('senha').value,
          ''
          ).subscribe(
              (response) => {
                this.loginModel = response;
        
                sessionStorage.setItem('userActived', JSON.stringify(this.loginModel));
        
                this._router.navigate(['home']);
              },
              (error) => {
                this.errorMessage = 'Acesso não Autorizado!';
                this.loading = false;
              },
              () => {
                this.loading = false;
              }
      );
  
    } catch (error) {}
  }
}
