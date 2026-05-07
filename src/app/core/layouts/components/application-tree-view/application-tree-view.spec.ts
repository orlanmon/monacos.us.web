import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTreeView } from './application-tree-view';

describe('ApplicationTreeView', () => {
  let component: ApplicationTreeView;
  let fixture: ComponentFixture<ApplicationTreeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationTreeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationTreeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
