import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  error: string;
  submitted: boolean;

  @Output() openRegister = new EventEmitter();
  @Output() openForgotPassw = new EventEmitter()

  constructor(
      private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
      this.buildLoginForm();
  }

  buildLoginForm() {
      this.loginForm = this.formBuilder.group({
        login: ['', [
          CustomValidators.loginValidator,
          Validators.required,
        ]],
        password: ['', Validators.required]
      });
	}

  resetErrors() {
      this.error = '';
      this.submitted = false;
	}

  enter() {
    //TODO: Fazer validações redirecionar a tela principal
  }

  openRegisterClick() {
      debugger;
      this.openRegister.emit("true");
  }

  openForgotPassword() {
      debugger;
      this.openForgotPassw.emit("true");
  }

}