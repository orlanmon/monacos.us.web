import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutomationViewer } from './home-automation-viewer';

describe('HomeAutomationViewer', () => {
  let component: HomeAutomationViewer;
  let fixture: ComponentFixture<HomeAutomationViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAutomationViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAutomationViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
