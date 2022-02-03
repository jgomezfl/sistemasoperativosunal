import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdivanadorComponent } from './adivanador.component';

describe('AdivanadorComponent', () => {
  let component: AdivanadorComponent;
  let fixture: ComponentFixture<AdivanadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdivanadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdivanadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
