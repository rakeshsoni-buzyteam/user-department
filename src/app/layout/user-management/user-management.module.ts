import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementComponent } from './user-management.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '', component: UserManagementComponent
  }
];

@NgModule({
  declarations: [
    UserManagementComponent, AddEditUserComponent, AddEditDepartmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    AddEditUserComponent,
    AddEditDepartmentComponent
  ]
})
export class UserManagementModule { }
