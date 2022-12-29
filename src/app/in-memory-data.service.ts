import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const users = [
      { id: 1, username: "user1", password: 'qwerty', role: 'user' },
      { id: 2, username: "user2", password: '12345', role: 'user' },
      { id: 3, username: "user3", password: 'qwe123', role: 'user' },
      { id: 4, username: "user4", password: '123qwe', role: 'user' },
      { id: 5, username: "user5", password: '543rty', role: 'user' },
      { id: 6, username: "admin", password: 'admin1', role: 'admin' },
    ];

    const teams = [
      { id: 1, name: "Sharks", members: [heroes[0].name, heroes[1].name, heroes[2].name] },
      { id: 2, name: "Aligators", members: [heroes[3].name, heroes[4].name, heroes[5].name] },
      { id: 3, name: "Bulls", members: [heroes[6].name, heroes[7].name, heroes[8].name] }
    ]
    return {
      heroes, users, teams
    };
  }
}
