import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherEntrepriseComponent } from './afficher-entreprise.component';

describe('AfficherEntrepriseComponent', () => {
  let component: AfficherEntrepriseComponent;
  let fixture: ComponentFixture<AfficherEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
