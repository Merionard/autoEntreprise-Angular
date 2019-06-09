import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEntrepreneurComponent } from './afficher-entrepreneur.component';

describe('AfficherEntrepreneurComponent', () => {
  let component: AfficherEntrepreneurComponent;
  let fixture: ComponentFixture<AfficherEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
