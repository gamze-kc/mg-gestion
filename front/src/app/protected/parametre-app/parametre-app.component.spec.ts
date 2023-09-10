import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreAppComponent } from './parametre-app.component';

describe('ParametreAppComponent', () => {
  let component: ParametreAppComponent;
  let fixture: ComponentFixture<ParametreAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParametreAppComponent]
    });
    fixture = TestBed.createComponent(ParametreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
