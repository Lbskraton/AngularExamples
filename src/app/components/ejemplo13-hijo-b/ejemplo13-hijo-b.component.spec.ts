import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13HijoBComponent } from './ejemplo13-hijo-b.component';

describe('Ejemplo13HijoBComponent', () => {
  let component: Ejemplo13HijoBComponent;
  let fixture: ComponentFixture<Ejemplo13HijoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo13HijoBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo13HijoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
