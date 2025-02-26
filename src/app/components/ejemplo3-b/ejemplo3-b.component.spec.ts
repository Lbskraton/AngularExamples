import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo3BComponent } from './ejemplo3-b.component';

describe('Ejemplo3BComponent', () => {
  let component: Ejemplo3BComponent;
  let fixture: ComponentFixture<Ejemplo3BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo3BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo3BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
