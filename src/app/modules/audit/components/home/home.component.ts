import { Component } from '@angular/core';

import { AuditClientService } from './../../services/audit-client.service';
import { IAuditLog } from '../../models/IAuditLog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  selectedTable: string;
  entries: Array<IAuditLog>;

  constructor(private readonly auditClient: AuditClientService) { }

  loadEntries(): void {
    this.auditClient.GetEntriesForTable(this.selectedTable)
      .subscribe(c => { this.entries = c; console.log(c); });
  }
}
