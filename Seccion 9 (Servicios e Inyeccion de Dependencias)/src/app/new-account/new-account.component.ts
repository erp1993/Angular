import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //providers: [LoggingService]
})
export class NewAccountComponent {
  private loggingService: LoggingService;
  private accountsService: AccountsService;

  constructor (loggingService: LoggingService, accountsService: AccountsService){
    this.loggingService = loggingService;
    this.accountsService = accountsService;
    this.accountsService.statusUpdated.subscribe(
      (status: string) => {
        alert("New Status: " + status);
      }
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
