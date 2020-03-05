import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[];

  private usersService: UsersService;
  private counterService: CounterService;

  constructor(usersService: UsersService, counterService: CounterService){
    this.usersService = usersService;
    this.counterService = counterService;
    this.users = Array.from(this.usersService.getActiveUsers());
    this.usersService.usuarioCambiado.subscribe(() => {
      this.users = Array.from(this.usersService.getActiveUsers());
    });
  }

  onClick(user: string){
    this.usersService.inactiveUser(user);
    this.usersService.usuarioCambiado.emit();
    this.counterService.counter++;
  }
}
