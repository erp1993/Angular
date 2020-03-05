import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  private counterService: CounterService;

  constructor(usersService: UsersService, counterService: CounterService){
    this.counterService = counterService;
  }
}
