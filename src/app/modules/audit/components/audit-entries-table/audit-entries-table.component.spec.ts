import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditEntriesTableComponent } from './audit-entries-table.component';

describe('AuditEntriesTableComponent', () => {
  let component: AuditEntriesTableComponent;
  let fixture: ComponentFixture<AuditEntriesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditEntriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditEntriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
