import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { MessageService } from 'src/app/services/message/message.service';
import { ApiUrl } from 'src/app/core/apiUrl';
import { HttpService } from 'src/app/services/http/http.service';
import { Subject } from 'rxjs';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  show = false;
  form: FormGroup;
  id = '';
  public onClose: Subject<{}>;

  allDepartment = [];

  constructor(
    private fb: FormBuilder, private message: MessageService, private http: HttpService,
    public _bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onClose = new Subject();
    this.makeForm();
  }

  makeForm() {
    this.form = this.fb.group({
      'name': ['', Validators.required],
      'department_id': ['', Validators.required],
      'designiation': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  patchValue(data) {
    this.id = data._id;
    this.form.patchValue({
      name: data.name,
      department_id: data.department_id && data.department_id._id ? data.department_id._id : data.department_id,
      email: data.email,
      designiation: data.designiation
    });
    this.form.controls.password.clearValidators();
    this.form.controls.password.updateValueAndValidity();
  }

  addEdit() {
    if (this.form.valid) {
      let obj = JSON.parse(JSON.stringify(this.form.value));
      
      if(!obj.password) {
        delete obj.password;
      } else {
        obj.password = obj.password.trim();
      }

      if (this.id) {
        obj['_id'] = this.id;
      }
      this.addServer(obj);
    } else {
      this.show = true;
    }
  }

  addServer(obj) {
    this.http.postData(ApiUrl.add_edit_users, obj)
      .subscribe(response => {
        this.onClose.next();
        if (this.id) {
          this.message.toast('success', SuccessErrorConst.updatedSuccess);
        } else {
          this.message.toast('success', SuccessErrorConst.addedSuccess);
        }
        this._bsModalRef.hide();
      }, error => {
      });
  }

}
