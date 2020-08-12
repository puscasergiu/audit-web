import { Component, OnInit, Input } from '@angular/core';
import { IAuditLog } from '../../models/IAuditLog';

@Component({
  selector: 'app-audit-entries-table',
  templateUrl: './audit-entries-table.component.html',
  styleUrls: ['./audit-entries-table.component.scss']
})
export class AuditEntriesTableComponent implements OnInit {

  @Input() entries: Array<IAuditLog>;
  displayedColumns: string[] = ['auditLogId', 'userId', 'date', 'keyValues', 'newValues', 'oldValues'];

  constructor() { }

  ngOnInit(): void {

  }

}
