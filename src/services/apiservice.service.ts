// client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  addClient(client: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>('http://localhost:8081/cadas/add', client, {
      headers,
    });
  }

  getAllClients(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/cadas/leitura');
  }
}
