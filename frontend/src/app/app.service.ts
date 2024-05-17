import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://localhost:8000/api/users/';
  private baseUrl: string = 'http://localhost:8000/api/users/';

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    console.log(user)
    return this.http.post<User>(this.url, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${id}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}${id}/`, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}${id}/`);
  }

  calcularPesoIdeal(userId: number) {
    return this.http.get<any>(`${this.url}calcular-peso-ideal/${userId}/`);
  }
  
}

