import { Component } from '@angular/core';
import { PersonComponent } from '../person/person.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [PersonComponent, CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
people: any

constructor(){
  this.people = [
    {
      name: "bob",
      age: 32,
      added_on: new Date().getTime(),
      instructor: true
    },
     {
      name: "pat",
      age: 32,
      added_on: new Date().getTime(),
      instructor: true
    },
     {
      name: "sam",
      age: 32,
      added_on: new Date().getTime(),
      instructor: false
    },
     {
      name: "tom",
      age: 32,
      added_on: new Date().getTime(),
      instructor: false
    }
  ]
}
onPersonDelete(evt: any){
  let del_per_name=evt.person_name
  this.people = this.people.filter((p:{name:string})=>p.name != del_per_name)
}
}
