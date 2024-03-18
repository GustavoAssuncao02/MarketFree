// client.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  addEndereco(endereco: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(
      'http://localhost:8081/cadas/endereco',
      endereco,
      {
        headers,
      }
    );
  }

  addUsuario(endereco: any, cliente: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const data = { endereco: endereco, cliente: cliente };
    return this.http.post<any>('http://localhost:8081/cadas/dado', data, {
      headers: headers,
    });
  }

  Login(dados: any): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>('http://localhost:8081/login', dados, {
      headers,
    }); 
  } 

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/cadas/leitura');
  }
  
  getUsuariosEspecifico(email: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = { email: email };
    return this.http.post<any>('http://localhost:8081/cadas/leituracliente', data, { headers: headers });
  }
}
