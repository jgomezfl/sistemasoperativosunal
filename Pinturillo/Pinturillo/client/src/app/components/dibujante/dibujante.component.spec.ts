import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DibujanteComponent } from './dibujante.component';

describe('DibujanteComponent', () => {
  let component: DibujanteComponent;
  let fixture: ComponentFixture<DibujanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DibujanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DibujanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
