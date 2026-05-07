import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWebSite } from './about-web-site';

describe('AboutWebSite', () => {
  let component: AboutWebSite;
  let fixture: ComponentFixture<AboutWebSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutWebSite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutWebSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
