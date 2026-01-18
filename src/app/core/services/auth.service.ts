@Injectable({ providedIn: 'root' })
export class AuthService {
  login(credentials: any) {
    return this.http.post('/api/auth/login', credentials);
  }

  getRoles(): string[] {
    const token = localStorage.getItem('token');
    if (!token) return [];
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.roles;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
