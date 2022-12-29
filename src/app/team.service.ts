import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from './hero';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamsUrl = 'api/teams';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamsUrl)
      .pipe(
        catchError(this.handleError<Team[]>('getTeams', []))
      );
  }

  addTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, team, this.httpOptions).pipe(
      catchError(this.handleError<Team>('addTeam'))
    );
  }

  addHero(hero: Hero, team: Team): Observable<Team> {
    return this.http.post<Team>(this.teamsUrl, hero, this.httpOptions).pipe(
      catchError(this.handleError<Team>('addHero'))
    );}

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
