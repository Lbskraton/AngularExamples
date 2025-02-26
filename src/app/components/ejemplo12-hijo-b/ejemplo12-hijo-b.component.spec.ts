import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12HijoBComponent } from './ejemplo12-hijo-b.component';

describe('Ejemplo12HijoBComponent', () => {
  let component: Ejemplo12HijoBComponent;
  let fixture: ComponentFixture<Ejemplo12HijoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo12HijoBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo12HijoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
