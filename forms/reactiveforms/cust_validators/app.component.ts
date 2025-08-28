import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cust-pass-validator';
  singleForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required,this.validateSamePassword])
  })

  validateSamePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.parent?.get('password')
    const confirmPassword = control.parent?.get('confirmPassword')
    return password?.value === confirmPassword?.value ? null : {'mismatch': true}
    
  }

  onSubmit(form: any){
    if (form.valid){
      console.log("submitted")
    }
  }
}
