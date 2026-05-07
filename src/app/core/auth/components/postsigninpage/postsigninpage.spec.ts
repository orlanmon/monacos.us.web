import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postsigninpage } from './postsigninpage';

describe('Postsigninpage', () => {
  let component: Postsigninpage;
  let fixture: ComponentFixture<Postsigninpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postsigninpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Postsigninpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
