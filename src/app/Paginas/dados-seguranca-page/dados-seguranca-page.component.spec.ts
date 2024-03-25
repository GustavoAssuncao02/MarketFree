import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSegurancaPageComponent } from './dados-seguranca-page.component';

describe('DadosSegurancaPageComponent', () => {
  let component: DadosSegurancaPageComponent;
  let fixture: ComponentFixture<DadosSegurancaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosSegurancaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosSegurancaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
