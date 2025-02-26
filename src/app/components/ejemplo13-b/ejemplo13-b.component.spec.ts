import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13BComponent } from './ejemplo13-b.component';

describe('Ejemplo13BComponent', () => {
  let component: Ejemplo13BComponent;
  let fixture: ComponentFixture<Ejemplo13BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo13BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo13BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
