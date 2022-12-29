import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        tap(_ => console.log('fetched users', document.cookie)),
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  logIn(users: User[], myForm: FormGroup): boolean {
    if (users.some(u => u["username"] == myForm.value["username"])){
      let user = users.find(u => u["username"] == myForm.value["username"])
      if (user?.password == myForm.value["password"] && user?.role) {
        document.cookie = user.role;
        return true
      }
    };
    return false
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  

  constructor(
    private http: HttpClient,) { }
}
