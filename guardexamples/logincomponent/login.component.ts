const router =inject(Router)
const authService = iject(AuthService)

Login() {
   this.authService.login()
   this.router.navigateByUrl('/protected')
}

Logout() {
   this.authService.logout()
  this.router.navigateByUrl('/')
}
