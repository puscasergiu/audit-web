import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AuditRoutingModule,
    MaterialModule
  ],
  exports: [
    AuditRoutingModule
  ]
})

export class AuditModule { }
