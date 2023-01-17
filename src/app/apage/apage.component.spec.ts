import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApageComponent } from './apage.component';

describe('ApageComponent', () => {
  let component: ApageComponent;
  let fixture: ComponentFixture<ApageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
