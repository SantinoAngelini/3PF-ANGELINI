import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutpruebaComponent } from './layoutprueba.component';

describe('LayoutpruebaComponent', () => {
  let component: LayoutpruebaComponent;
  let fixture: ComponentFixture<LayoutpruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutpruebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
