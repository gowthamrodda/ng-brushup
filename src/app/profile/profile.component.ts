import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService, User } from './user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Form Subbmitted');
    this.userService.addUser(this.profileForm.value);
  }

  onReset() {
    this.profileForm.reset();
  }

}
