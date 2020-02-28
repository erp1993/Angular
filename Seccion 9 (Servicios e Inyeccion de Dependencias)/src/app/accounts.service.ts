import { Injectable, Output } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private loggingService: LoggingService;
  @Output() accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor (loggingService: LoggingService){
    this.loggingService = loggingService;
  }

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateAccount(id: number, newStatus: string){
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
