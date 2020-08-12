import { Component, OnInit } from '@angular/core';

import { AuditClientService } from './../../services/audit-client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly auditClient: AuditClientService) { }

  ngOnInit(): void {
    this.auditClient.GetEntriesForTable('customer').subscribe(c => console.log(c));
  }

}
