import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class AuthUserGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }
    canActivate() {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
