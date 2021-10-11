import {Injectable} from '@angular/core';
import {Person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  persons: Person[] = [{
    id: 1,
    idCode: 1,
    name: 'thu',
    gmail: 'thu@gmail.com',
    phone: '0123456789',
    address: 'hung yen',
  }];

  constructor() {
  }
  getAll(){
    return this.persons;
  }
}
