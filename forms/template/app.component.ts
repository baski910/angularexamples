import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface User {
  username: string
  useremail: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'example1';
  formData: User = {
    username: '',
    useremail: ''
  }

  onSubmit(form: any){
    if(form.valid){
      console.log('form submitted:', this.formData)
    }
  }
}
