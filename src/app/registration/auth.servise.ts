import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, catchError, tap, of  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8000';  // Your test_token endpoint
  private usernameSubject = new BehaviorSubject<string>('Guest'); // Default to 'Guest'
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Default to false
  username$ = this.usernameSubject.asObservable();
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  
  constructor(private http: HttpClient) {}

  
  getUsername(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user-details`, { withCredentials: true }).pipe(
      tap(user => {
        this.usernameSubject.next(user.username);
        this.isAuthenticatedSubject.next(user.username !== 'Guest');
      }),
      catchError(() => {
        this.usernameSubject.next('Guest');
        this.isAuthenticatedSubject.next(false);
        return of({ username: 'Guest' });
      })
    );
  }

  logout(): void {
    this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).subscribe(() => {
      // Clear any state on frontend
      this.isAuthenticatedSubject.next(false);
      this.usernameSubject.next('Guest');
    });
  }

  getUserProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/user-projects/`, { withCredentials: true });
  }
  

  


}
