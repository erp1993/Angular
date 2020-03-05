import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];

  private usersService: UsersService;
  private counterService: CounterService;

  constructor(usersService: UsersService, counterService: CounterService){
    this.usersService = usersService;
    this.counterService = counterService;
    this.users = Array.from(this.usersService.getInactiveUsers());
    this.usersService.usuarioCambiado.subscribe(() => {
      this.users = Array.from(this.usersService.getInactiveUsers());
    });
  }

  onClick(user: string){
    this.usersService.activeUser(user);
    this.usersService.usuarioCambiado.emit();
    this.counterService.counter++;
  }

}
