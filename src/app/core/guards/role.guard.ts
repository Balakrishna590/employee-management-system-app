@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedRoles = route.data['roles'];
    return allowedRoles.some((r: string) =>
      this.auth.getRoles().includes(r)
    );
  }
}
