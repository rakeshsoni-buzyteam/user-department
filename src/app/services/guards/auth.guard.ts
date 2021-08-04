import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UiService } from '../ui.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        protected router: Router,
        private uiService: UiService
    ) {
    }

    canActivate() {
        if (!this.uiService.getToken()) {
            return true;
        }
        this.router.navigate(['/user-dashboard']);
        return false;
    }

}
