import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAuditLog } from './../models/IAuditLog';
import { environment } from './../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuditClientService {

  constructor(private readonly httpClient: HttpClient) { }

  public GetEntriesForTable(tableName: string): Observable<Array<IAuditLog>> {
    return this.httpClient.get<Array<IAuditLog>>(`${environment.apiUrl}/audit/${tableName}`);
  }
}
