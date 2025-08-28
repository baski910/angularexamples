import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  userForm!: FormGroup
  ngOnInit(){
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      phoneNumber: new FormControl('',[Validators.required,
        Validators.pattern(/^\d{10}$/)
      ])

    })
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted', this.userForm.value)
    }
  }
}
