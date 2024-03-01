import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formLogin!: FormGroup;

constructor(private fb: FormBuilder){

}
  createForm() {
    this.formLogin = this.fb.group({
      login: '',
      senha: '',
    });
  }
  ngOnInit(): void {
    this.createForm();
  }
  onSubmitLogin() {
    throw new Error('Method not implemented.');
  }
}
