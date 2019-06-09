import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelarationEntrepriseComponent } from './delaration-entreprise.component';

describe('DelarationEntrepriseComponent', () => {
  let component: DelarationEntrepriseComponent;
  let fixture: ComponentFixture<DelarationEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelarationEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelarationEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
