import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEnderecoComponent } from './formulario-endereco.component';

describe('FormularioEnderecoComponent', () => {
  let component: FormularioEnderecoComponent;
  let fixture: ComponentFixture<FormularioEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioEnderecoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
