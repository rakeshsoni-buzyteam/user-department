import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ApiUrl } from 'src/app/core/apiUrl';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { HttpService } from 'src/app/services/http/http.service';
import { MessageService } from 'src/app/services/message/message.service';
import { PaginationControls } from 'src/app/shared/models/pagination-model';
import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  allDepartment = [];
  paginationDepartment = new PaginationControls();

  allUser = [];
  paginationUser = new PaginationControls();

  constructor(
    private http: HttpService, private message: MessageService, private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getDepartment();
  }

  getUser() {
    this.http.getData(ApiUrl.list_users).subscribe(res => {
      this.allUser = res.data.data;
      this.paginationUser.count = res.data.total_count;
    }, error => { });
  }

  getDepartment() {
    this.http.getData(ApiUrl.list_departments).subscribe(res => {
      this.allDepartment = res.data.data;
      this.paginationDepartment.count = res.data.total_count;
    }, error => { });
  }

  deleteConfirm(data, index, type) {
    this.message.confirm(`delete this ${type}`)
      .then(result => {
        if (result.value) {
          this.delete(data, index, type);

        }
      });
  }

  delete(data, index, type) {
    let obj = {
      _id: data._id,
      is_deleted: true
    };
    this.http.putData(type == 'department' ? ApiUrl.manage_department : ApiUrl.manage_users, obj)
      .subscribe(res => {
        this.message.toast('success', SuccessErrorConst.deleteSuccess);
        if (type == 'department') {
          this.allDepartment.splice(index, 1);
          this.paginationDepartment.count = this.paginationDepartment.count - 1;
        } else {
          this.allUser.splice(index, 1);
          this.paginationUser.count = this.paginationUser.count - 1;
        }
      });
  }

  blockedUnblock(data, type) {
    let obj = {
      _id: data._id,
      is_blocked: !data.is_blocked
    };
    this.http.putData(type == 'department' ? ApiUrl.manage_department : ApiUrl.manage_users, obj)
      .subscribe(res => {
        data.is_blocked = !data.is_blocked;
        this.message.toast('success', SuccessErrorConst.updatedSuccess);
      });
  }

  addEditDepart(data?: any) {
    const modalRef = this.modalService.show(AddEditDepartmentComponent, {
      backdrop: 'static',
      keyboard: false
    });
    if (!!data) {
      modalRef.content.patchValue(data);
    }
    modalRef.content.onClose.subscribe(result => {
      this.getDepartment();
    });
  }

  addEditUser(data?: any) {
    const modalRef = this.modalService.show(AddEditUserComponent, {
      backdrop: 'static',
      keyboard: false
    });
    modalRef.content.allDepartment = this.allDepartment;
    if (!!data) {
      modalRef.content.patchValue(data);
    }
    modalRef.content.onClose.subscribe(result => {
      this.getUser();
    });
  }

}
