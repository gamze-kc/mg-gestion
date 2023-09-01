import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCompteComponent } from './ajout-compte.component';

describe('AjoutCompteComponent', () => {
  let component: AjoutCompteComponent;
  let fixture: ComponentFixture<AjoutCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutCompteComponent]
    });
    fixture = TestBed.createComponent(AjoutCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
