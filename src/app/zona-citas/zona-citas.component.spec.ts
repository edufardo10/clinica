import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaCitasComponent } from './zona-citas.component';

describe('ZonaCitasComponent', () => {
  let component: ZonaCitasComponent;
  let fixture: ComponentFixture<ZonaCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonaCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
