import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperadditionComponent } from './newspaperaddition.component';

describe('NewspaperadditionComponent', () => {
  let component: NewspaperadditionComponent;
  let fixture: ComponentFixture<NewspaperadditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperadditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewspaperadditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
