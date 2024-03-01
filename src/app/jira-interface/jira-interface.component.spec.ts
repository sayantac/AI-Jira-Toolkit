import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraInterfaceComponent } from './jira-interface.component';

describe('JiraInterfaceComponent', () => {
  let component: JiraInterfaceComponent;
  let fixture: ComponentFixture<JiraInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JiraInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
