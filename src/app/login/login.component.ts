import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../services/http/http.service';
import { UiService } from '../services/ui.service';
import { ApiUrl } from '../core/apiUrl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  show = false;
  form: FormGroup;
  isLoginHit = 1;

  constructor(
    private fb: FormBuilder, private http: HttpService, private uiService: UiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  signIn(): void {
    this.show = true;
    if (this.form.valid) {
      this.login();
    }
  }

  login() {
    let obj = JSON.parse(JSON.stringify(this.form.value));
    this.http.postData(ApiUrl.login, obj)
      .subscribe(response => {
        this.localStorageSetRole(response.data);
      }, error => {
      });
  }

  localStorageSetRole(data) {
    this.uiService.setToken(data.access_token);
    this.router.navigate(['/user-dashboard']);
  }

}
