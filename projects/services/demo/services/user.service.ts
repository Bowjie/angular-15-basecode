import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  createUser(params: any): Observable<any> {
    const fullUrl = `${this.apiUrl}/demo/user/create`;
    return this.httpClient.post<any>(fullUrl, params);
  }
  updateUser(params: any): Observable<any> {
    const fullUrl = `${this.apiUrl}/demo/user/update`;
    return this.httpClient.put<any>(fullUrl, params);
  }
  deleteUser(id: string | number): Observable<any> {
    const fullUrl = `${this.apiUrl}/demo/user/delete/${id}`;
    return this.httpClient.delete<any>(fullUrl);
  }
  getUser(): Observable<User[]> {
    const fullUrl = `${this.apiUrl}/demo/user/get`;
    return this.httpClient.get<User[]>(fullUrl);
  }
}
