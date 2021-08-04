import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { MessageService } from '../message/message.service';
import { SuccessErrorConst } from 'src/app/core/successErrorConst';
import { UiService } from '../ui.service';

@Injectable({
  providedIn: 'root'
})
export class AclGuard implements CanActivate {

  constructor(
    private router: Router, private message: MessageService,
    private uiService: UiService, private activeRoute: ActivatedRoute
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let role = this.uiService.getRole();
    if (role && route.data.permission.indexOf(role) > -1) {
      return true;
    }
    this.router.navigate(['/not-found']);
    return false;
  }

}
