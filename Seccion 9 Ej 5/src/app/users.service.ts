import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  @Output() users = new Map();
  @Output() usuarioCambiado = new EventEmitter<void>();

  constructor() {
   this.users.set("Max", true);
   this.users.set("Anna", true); 
   this.users.set("Chris", false); 
   this.users.set("Manu", false); 
  }

  activeUser(name: string) {
    this.users.set(name, true);
  }

  inactiveUser(name: string) {
    this.users.set(name, false);
  }

  getActiveUsers() {
    return new Map(
      Array.from(this.users).filter(([k, v]) => {
        return v == true;
      })
    ).keys()
  }

  getInactiveUsers() {
    return new Map(
      Array.from(this.users).filter(([k, v]) => {
        return v == false;
      })
    ).keys()
  }
}
