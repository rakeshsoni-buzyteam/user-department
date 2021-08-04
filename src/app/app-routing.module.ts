import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

// guards
import { AuthGuard } from './services/guards/auth.guard';
import { LayoutGuard } from './services/guards/layout.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: './login/login.module#LoginModule',
    data: { title: 'Login', breadcrumb: 'Login' }, canActivate: [AuthGuard]
  },
  {
    path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [LayoutGuard]
  },
  {
    path: 'not-found', component: NotFoundComponent,
    data: { title: 'Not Found', breadcrumb: 'Not Found' }
  },
  {
    path: '**', redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
