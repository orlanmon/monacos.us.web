import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Signoutpage } from './signoutpage';

describe('Signoutpage', () => {
  let component: Signoutpage;
  let fixture: ComponentFixture<Signoutpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Signoutpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Signoutpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
