import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12BComponent } from './ejemplo12-b.component';

describe('Ejemplo12BComponent', () => {
  let component: Ejemplo12BComponent;
  let fixture: ComponentFixture<Ejemplo12BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo12BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo12BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
