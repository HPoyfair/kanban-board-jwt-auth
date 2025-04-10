import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload & { exp: number }>(token);
      if (decoded.exp) {
        const now = Date.now() / 1000; // seconds
        return decoded.exp < now;
      }
      return true;
    } catch (err) {
      return true;
    }
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('kanban_token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('kanban_token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('kanban_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
