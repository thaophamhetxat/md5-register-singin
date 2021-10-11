import {Component, OnInit} from '@angular/core';
import {PersonService} from "../../service/person.service";
import {Person} from "../../model/person";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.persons = this.personService.getAll();
  }
}
