import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo17BComponent } from './ejemplo17-b.component';

describe('Ejemplo17BComponent', () => {
  let component: Ejemplo17BComponent;
  let fixture: ComponentFixture<Ejemplo17BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo17BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo17BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
