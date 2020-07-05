import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface User {
  firstName: string;
  lastName: string;
}
const fakeUser: User = {
  firstName : 'Gowtham',
  lastName: 'Kumar'
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  user = new Subject<User>();

  loadUser(): Observable<User> {
    return of<User>(fakeUser).pipe(delay(2000));
  }

  addUser(user: User) {
    this.user.next(user);
  }
}
