import { Component, OnInit } from '@angular/core';
import { UserSearchResponse } from '../user-search-response';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  searchTerm: string;

  res: UserSearchResponse;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  searchUsers(){
    this.res = this.userService.searchUsers(this.searchTerm);
  }
}
