import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private userIdSubject = new BehaviorSubject<number>(0);
  // Transformando BehaviorSubject em Observable
  public userId: Observable<number> = this.userIdSubject.asObservable(); 

  constructor(private router: Router) {
    this.checkAuthenticationStatus();
  }

  setAuthenticationStatus(status: boolean): void {
    this.isAuthenticatedSubject.next(status);
  }

  getAuthenticationStatus(): Observable<boolean> {
    return this.isAuthenticated;
  }

  getUserId(): Observable<number> {
    return this.userId;
  }

  private checkAuthenticationStatus(): void {
    const token = localStorage.getItem('jwt_token');
    console.log('Token JWT:', token); // Adicione este console.log
    const isAuthenticated = !!token;
  
    this.setAuthenticationStatus(isAuthenticated);
  
    if (isAuthenticated) {
      const decodedToken: any = jwtDecode(token);
      console.log('Token Decodificado:', decodedToken); // Adicione este console.log
      const id = decodedToken.id;
      console.log('userId:', id); // Adicione este console.log
      this.userIdSubject.next(id);
    }
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.setAuthenticationStatus(false);
    this.userIdSubject.next(0);
    this.router.navigate(['/login']); 
  }
}
