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
  getEndereco(id: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const data = { id: id };
    return this.http.post<any>('http://localhost:8081/cadas/leituraclienteEndereco', data, { headers: headers });
  }
  atualizarCliente(cliente: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>('http://localhost:8081/cadas/alterarUsuario', cliente, { headers: headers });
}

atualizarEndereco(endereco: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>('http://localhost:8081/cadas/alterarEndereco', endereco, { headers: headers });
}

atualizarClienteDados(cliente: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>('http://localhost:8081/cadas/alterarUsuarioDados', cliente, { headers: headers });
}

atualizarClienteSeguranca(cliente: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>('http://localhost:8081/cadas/alterarUsuarioSeguranca', cliente, { headers: headers });
}
apagarConta(idUsuario: number): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>('http://localhost:8081/cadas/apagarConta', { idUsuario }, { headers: headers });
}
}
