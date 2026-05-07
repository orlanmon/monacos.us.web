import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signinpage } from './signinpage';

describe('Signinpage', () => {
  let component: Signinpage;
  let fixture: ComponentFixture<Signinpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signinpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signinpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
