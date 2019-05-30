import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEntrepreneurComponent } from './creation-entrepreneur.component';

describe('CreationEntrepreneurComponent', () => {
  let component: CreationEntrepreneurComponent;
  let fixture: ComponentFixture<CreationEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
