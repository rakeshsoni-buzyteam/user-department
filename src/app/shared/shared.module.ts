
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Directives
import { AmountDirective } from './directives/amount.directive';
import { NumberOnlyDirective } from './directives/number-only.directive';

import { ModalModule } from 'ngx-bootstrap/modal';
import { NoRecordComponent } from '../layout/common/no-record/no-record.component';

const directives = [
  NumberOnlyDirective,
  AmountDirective,
  NoRecordComponent
];

const imports = [
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  NgxPaginationModule
];

@NgModule({
  declarations: [
    ...directives,
  ],
  imports: [
    CommonModule,
    ...imports,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  exports: [
    ...directives,
    ...imports,
    BsDatepickerModule,
    ModalModule
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule { }
