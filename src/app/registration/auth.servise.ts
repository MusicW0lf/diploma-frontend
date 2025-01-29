import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private apiUrl = 'http://localhost:8000/test_token';  // Your test_token endpoint

  constructor(private http: HttpClient) {}

  // Check if the user is authenticated and return the username if valid
  getUsername(): Observable<string> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return of('Guest');  // If no token, return 'Guest'
    }

    const headers = new HttpHeaders({
      'Authorization': `Token ${token}`,
    });

    return this.http.get<{ username: string }>(this.apiUrl, { headers: headers })
      .pipe(
        map(response => response.username),  // Extract the username from the response
        catchError(() => of('Guest'))  // If the request fails, return 'Guest'
      );
  }

  // Optionally, you can implement a method to log out the user
  logout(): void {
    localStorage.removeItem('authToken');
  }
}
