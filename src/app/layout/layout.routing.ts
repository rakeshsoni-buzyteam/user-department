import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';
import { AclGuard } from '../services/guards/acl.guard';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'user-dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        data: { breadcrumbs: 'Dashboard', title: 'Dashboard', permission: 'MANAGER,ADMIN,USER' }, canActivate: [AclGuard]
      },
      {
        path: 'user-management',
        loadChildren: './user-management/user-management.module#UserManagementModule',
        data: { breadcrumbs: 'User Management', title: 'User Management', permission: 'MANAGER,ADMIN' }, canActivate: [AclGuard]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
