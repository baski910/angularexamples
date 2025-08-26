import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ColorsDirective } from '../colors.directive';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [CommonModule, ColorsDirective],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
@Input() person!: any
@Output() delete=new EventEmitter<string>()

onDelete(evt: any,person_name: string){
  evt['person_name'] = person_name
  this.delete.emit(evt)
}
}
