import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../profile/user.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  userList = [{ firstName: 'Gowtham', lastName: 'Kumar'}];
  displayedColumns: string[] = ['FirstName', 'LastName'];
  dataSource = new BehaviorSubject<User[]>(this.userList);
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.user.subscribe((usr) => {
      this.userList.push(usr);
      this.dataSource.next([...this.userList]);
    });
  }

}
