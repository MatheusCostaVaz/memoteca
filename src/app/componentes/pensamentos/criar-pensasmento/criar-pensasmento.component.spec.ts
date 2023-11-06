import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensasmentoComponent } from './criar-pensasmento.component';

describe('CriarPensasmentoComponent', () => {
  let component: CriarPensasmentoComponent;
  let fixture: ComponentFixture<CriarPensasmentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensasmentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensasmentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
