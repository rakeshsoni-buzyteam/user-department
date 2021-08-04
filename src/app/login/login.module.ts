import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// components
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LoginModule { }
