import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer3BComponent } from './ejer3-b.component';

describe('Ejer3BComponent', () => {
  let component: Ejer3BComponent;
  let fixture: ComponentFixture<Ejer3BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer3BComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer3BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
