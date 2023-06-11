import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperEditionComponent } from './newspaper-edition.component';

describe('NewspaperEditionComponent', () => {
  let component: NewspaperEditionComponent;
  let fixture: ComponentFixture<NewspaperEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspaperEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewspaperEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
