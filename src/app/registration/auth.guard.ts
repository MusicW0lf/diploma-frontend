import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.servise';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    // Force the request to get the user details and authentication status
    await firstValueFrom(this.authService.getUsername());

    // After calling getUsername(), check the authentication status
    const isAuthenticated = await firstValueFrom(this.authService.isAuthenticated$);

    console.log("AuthGuard check:", isAuthenticated);

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['auth'], { queryParams: { mode: 'login' } });
      return false;
    }
  }
}
