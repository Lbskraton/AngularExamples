import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo4BComponent } from './ejemplo4-b.component';

describe('Ejemplo4BComponent', () => {
  let component: Ejemplo4BComponent;
  let fixture: ComponentFixture<Ejemplo4BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo4BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo4BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
