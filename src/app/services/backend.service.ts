import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getHeroes() {
    return [
      {
        id: 1,
        name: 'John',
      },
      {
        id: 2,
        name: 'Jane',
      },
      {
        id: 2,
        name: 'Adam',
      },
    ];
  }
}
