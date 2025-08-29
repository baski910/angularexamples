import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core'
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router)
  const authService = Inject(AuthService)
  
  if (authService.isAutehticated()){
    return true
  }
  else {
    router.navigate(['/login'])
    return false
  }
  //return true;
};
