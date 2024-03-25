import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSegurancaComponent } from './dados-seguranca.component';

describe('DadosSegurancaComponent', () => {
  let component: DadosSegurancaComponent;
  let fixture: ComponentFixture<DadosSegurancaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DadosSegurancaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DadosSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
