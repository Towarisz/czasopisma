import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageRoutingComponent } from './home-page-routing.component';

describe('HomePageRoutingComponent', () => {
  let component: HomePageRoutingComponent;
  let fixture: ComponentFixture<HomePageRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
