import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodenDoorComponent } from './wooden-door.component';

describe('WoodenDoorComponent', () => {
  let component: WoodenDoorComponent;
  let fixture: ComponentFixture<WoodenDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodenDoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
