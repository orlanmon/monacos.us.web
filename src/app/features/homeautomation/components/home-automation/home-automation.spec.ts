import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAutomation } from './home-automation';

describe('HomeAutomation', () => {
  let component: HomeAutomation;
  let fixture: ComponentFixture<HomeAutomation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAutomation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAutomation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
