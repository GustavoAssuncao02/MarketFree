import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaExcluidaComponent } from './conta-excluida.component';

describe('ContaExcluidaComponent', () => {
  let component: ContaExcluidaComponent;
  let fixture: ComponentFixture<ContaExcluidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContaExcluidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContaExcluidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
