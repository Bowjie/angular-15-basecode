import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demo } from '../../models/demo/demo';
import { environment } from '../../shared/environments/environment';

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
  getUser(): Observable<Demo[]> {
    const fullUrl = `${this.apiUrl}/demo/user/get`;
    return this.httpClient.get<Demo[]>(fullUrl);
  }
}
