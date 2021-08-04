import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { UiService } from '../ui.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate {

  constructor(
    private router: Router,
    private message: MessageService,
    private uiService: UiService
  ) { }

  canActivate(): boolean {
    if (!!this.uiService.getToken()) {
      return true;
    }
    localStorage.clear();
    this.router.navigate(['/login']);
    this.message.toast('info', SuccessErrorConst.loginAgin);
    return false;
  }

}
